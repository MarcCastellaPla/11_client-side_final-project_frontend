import { useState } from "react";

export function useButtons() {
  const [isFormVisible, setFormVisible] = useState(false);

  function toggleFormVisibility() {
    setFormVisible((prevValue) => !prevValue);
  }

  function showEditForm() {
    setFormVisible(true);
  }

  return { isFormVisible, showEditForm, toggleFormVisibility }; 
}
