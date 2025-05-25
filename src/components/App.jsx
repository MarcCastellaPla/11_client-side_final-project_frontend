import "./App.css";

import { Header } from "./Header.jsx";
import { ListContainer } from "./ListContainer.jsx";
import { BooksList } from "./BooksList.jsx";
import { BookFormContainer } from "./BookFormContainer.jsx";
import { useBooks } from "../hooks/useBooks";
import { useButtons } from "../hooks/useButtons";

function App() {
  const { books, addBook, deleteBook, setBookToEdit, bookToEdit, editBook } = useBooks();
  const { isFormVisible, toggleFormVisibility, showEditForm } = useButtons();

  return (
    <>
      <Header />
      <BookFormContainer
        addBook={addBook}
        toggleFormVisibility={toggleFormVisibility}
        isFormVisible={isFormVisible}
        bookToEdit={bookToEdit}
        editBook={editBook}
        setBookToEdit={setBookToEdit}
      />
      <ListContainer>
        <BooksList books={books} showEditForm={showEditForm} deleteBook={deleteBook} setBookToEdit={setBookToEdit} />
      </ListContainer>
    </>
  );
}

export default App;
