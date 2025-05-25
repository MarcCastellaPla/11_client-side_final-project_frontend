import "./App.css";

import { Header } from "./Header.jsx";
import { ListContainer } from "./ListContainer.jsx";
import { BooksList } from "./BooksList.jsx";
import { BookForm } from "./BookForm.jsx";
import { useBooks } from "../hooks/useBooks";
import { useButtons } from "../hooks/useButtons";

function App() {
  const { books, addBook, deleteBook } = useBooks();
  const { isFormVisible, toggleFormVisibility, showEditForm } = useButtons();

  return (
    <>
      <Header />
      <BookForm
        addBook={addBook}
        toggleFormVisibility={toggleFormVisibility}
        isFormVisible={isFormVisible}
      />
      <ListContainer>
        <BooksList books={books} showEditForm={showEditForm} deleteBook={deleteBook} />
      </ListContainer>
    </>
  );
}

export default App;
