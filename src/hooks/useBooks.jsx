import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;


export function useBooks() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);


  const fetchBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`);
    const data = await response.json();
    setBooks(data);
  } catch (error) {
    console.error("Failed to fetch books:", error);
  }
};


  const updateBooks = (books) => {
    setBooks(books);
  };

  const deleteBook = async ({ id }) => {
    const apiLink = `${BASE_URL}/books/${id}`;

    const response = await fetch(apiLink, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await fetchBooks(); 
    } else {
      console.error("Failed to delete book");
    }
  };


  const addBook = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const apiLink = `${import.meta.env.VITE_API_URL}/books`;

    const title = formData.get("title");
    const author = formData.get("author");
    const year = formData.get("year");
    const status = formData.get("status");

    const book = {
      title,
      author,
      year,
      status,
    };

    const response = await fetch(apiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    const newBook = await response.json();

    setBooks([...books, newBook]);

    event.target.reset();

    updateBooks([...books, newBook]);

    return newBook;
  };

  const editBook = async (event) => {
    
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const author = formData.get("author");
    const year = formData.get("year");
    const status = formData.get("status");
    const bookId = bookToEdit.id;
    const updatedBook = {
      id: bookId,
      title,
      author,
      year,
      status,
    };
    const apiLink = `${import.meta.env.VITE_API_URL}/books/${bookId}`;

     ("Editing book:", updatedBook);

    const response = await fetch(apiLink, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
    const editedBook = await response.json();

    if (response.ok) {
      alert("Book edited successfully!");
      await fetchBooks(); 
    } else {
      console.error("Failed to edit book");
    }
    return editedBook;    
  };

  useEffect(() => {
  fetchBooks();
  }, []);


  return { books, updateBooks, addBook, editBook, deleteBook, fetchBooks, bookToEdit, setBookToEdit };
}
