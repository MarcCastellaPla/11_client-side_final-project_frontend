import { useState } from "react";

export function useBookForm(
  addBook,
  bookToEdit,
  editBook,
  toggleFormVisibility,
  setBookToEdit
) {

  const [isSaving, setIsSaving] = useState(false);

  function startSaving() { 
    setIsSaving(true); 
  }
  function stopSaving()  { 
    setIsSaving(false); 
  }

  let title      = "";
  let author     = "";
  let year       = new Date().getFullYear();
  let status     = "pending";
  let titleText  = "Add New Book";
  let buttonText = "Add Book";

  if (bookToEdit) {
    title      = bookToEdit.title;
    author     = bookToEdit.author;
    year       = bookToEdit.year;
    status     = bookToEdit.status;
    titleText  = "Edit Book";
    buttonText = "Edit Book";
  }

  if (isSaving) {
    buttonText = "Saving...";
  }

  async function handleSubmit(event) {
    event.preventDefault();
    startSaving();

    if (bookToEdit) {
      await editBook(event);
      setBookToEdit(null);
    } else {
      await addBook(event);
    }

    toggleFormVisibility();
    stopSaving();
  }


  return {
    title,
    author,
    year,
    status,
    titleText,
    buttonText,
    handleSubmit,
  };
}
