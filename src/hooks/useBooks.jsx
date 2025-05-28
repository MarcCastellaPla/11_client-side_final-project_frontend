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
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
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
        console.error("Failed to delete book");
      }
    } catch (error) {
      console.error("Failed to delete book:", error);
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
    const response = await fetch(`${BASE_URL}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    const newBook = await response.json();
    const updatedList = [...books, newBook];
    setBooks(updatedList);
    event.target.reset();
    updateBooks(updatedList);
    return newBook;
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
      console.error("Failed to edit book");
    }
    return result;
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
