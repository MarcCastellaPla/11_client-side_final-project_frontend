import "./App.css";

import { Header } from "./Header.jsx";
import { ListContainer } from "./ListContainer.jsx";
import { ItemsList } from "./ItemsList.jsx";
import { BookForm } from "./BookForm.jsx";
import { useBooks } from "../hooks/useBooks";

function App() {
  const { books, addBook } = useBooks();

  return (
    <>
      <Header />
      <BookForm addBook={addBook} />
      <ListContainer>
        <ItemsList books={books} />
      </ListContainer>
    </>
  );
}

export default App;
