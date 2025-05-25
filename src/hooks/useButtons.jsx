import { useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export function useButtons() {
  const [isFormVisible, setFormVisible] = useState(false);

  function toggleFormVisibility() {
    setFormVisible((prevValue) => !prevValue);
  }

  function showEditForm() {
    setFormVisible(true);
  }

  return { isFormVisible, showEditForm, toggleFormVisibility }; // Add addBook to the returned object
}
