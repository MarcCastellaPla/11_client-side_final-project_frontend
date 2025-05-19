import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export function useBooks() {
  const [books, setBooks] = useState([]);

  const updateBooks = (books) => {
    setBooks(books);
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
    console.log("New book added:", newBook);

    // Update the books state with the new book
    setBooks([...books, newBook]);

    // Reset form
    event.target.reset();

    // Use UpdateBooks to update the books state
    updateBooks([...books, newBook]);

    return newBook;
  };

  useEffect(() => {
    fetch(`${BASE_URL}/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Failed to fetch books:", error));
  }, []);

  return { books, updateBooks, addBook }; // Add addBook to the returned object
}
