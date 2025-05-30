import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchBooks() {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/books`);
      if (!response.ok) {
        console.error("Failed to fetch books:", response.statusText);
        alert("Could not load books. Please try again later.");
        return;
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
      alert("Could not load books. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  }

  function updateBooks(newBooks) {
    setBooks(newBooks);
  }

  async function deleteBook({ id }) {
    try {
      const response = await fetch(`${BASE_URL}/books/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        await fetchBooks();
      } else {
        console.error("Failed to delete book:", response.statusText);
        alert("Could not delete the book. Please try again.");
      }
    } catch (error) {
      console.error("Failed to delete book:", error);
      alert("Could not delete the book. Please check your connection.");
    }
  }

  async function addBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = {
      title:  formData.get("title"),
      author: formData.get("author"),
      year:   formData.get("year"),
      status: formData.get("status"),
    };

    try {
      const response = await fetch(`${BASE_URL}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      if (!response.ok) {
        console.error("Failed to add book:", response.statusText);
        alert("Could not add the book. Please try again.");
        return;
      }
      const newBook = await response.json();
      const updatedList = [...books, newBook];
      setBooks(updatedList);
      event.target.reset();
      updateBooks(updatedList);
      return newBook;
    } catch (error) {
      console.error("Failed to add book:", error);
      alert("Could not add the book. Please check your connection.");
    }
  }

  async function editBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedBook = {
      id:     bookToEdit.id,
      title:  formData.get("title"),
      author: formData.get("author"),
      year:   formData.get("year"),
      status: formData.get("status"),
    };

    try {
      const response = await fetch(`${BASE_URL}/books/${updatedBook.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Book edited successfully!");
        fetchBooks();
      } else {
        console.error("Failed to edit book:", response.statusText);
        alert("Could not save your changes. Please try again.");
      }
      return result;
    } catch (error) {
      console.error("Failed to edit book:", error);
      alert("Could not save your changes. Please check your connection.");
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    isLoading,
    fetchBooks,
    updateBooks,
    addBook,
    editBook,
    deleteBook,
    bookToEdit,
    setBookToEdit,
  };
}
