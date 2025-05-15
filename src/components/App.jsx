import "./App.css";

import { Header } from "./Header.jsx";
import { ListContainer } from "./ListContainer.jsx";
import { ItemsList } from "./ItemsList.jsx";
import { BookForm } from "./BookForm.jsx";
import { useBooks } from "../hooks/useBooks"; // ajusta el path si es necesario

function App() {
  const [books, setBooks] = useBooks();

  return (
    <>
      <Header />
      <BookForm />
      <ListContainer>
        <ItemsList books={books} />
      </ListContainer>
    </>
  );
}

export default App;
