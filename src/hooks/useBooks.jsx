import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Failed to fetch books:", error));
  }, []);

  return [books, setBooks];
}
