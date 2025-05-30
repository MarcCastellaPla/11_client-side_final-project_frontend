import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BookCard } from "./BookCard";

describe("Given BookCard", () => {
  const mockBook = {
    id: 1,
    title: "Book test",
    author: "Book author",
    year: "1",
    status: "pending",
  };

  afterEach(() => {
    cleanup();
  });

  it("should print an h4 with the correct title", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);
    const title = getByText("Book test");

    // Assert
    expect(title.tagName).toBe("H4");
  });

  it("should print a paragraph with the correct author", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);
    const paragraph = getByText("Book author");

    // Assert
    expect(paragraph.tagName).toBe("P");
  });

  it("should print a paragraph with the correct year", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);
    const paragraph = getByText("1");

    // Assert
    expect(paragraph.tagName).toBe("P");
  });

  it("should print a span with the correct status", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);
    const span = getByText("pending");

    // Assert
    expect(span.tagName).toBe("SPAN");
  });

  it("should call setBookToEdit and showEditForm when Edit is clicked", () => {
    // Arrange
    const setBookToEdit = vi.fn();
    const showEditForm = vi.fn();

    // Act
    const { getByText } = render(
      <BookCard
        book={mockBook}
        setBookToEdit={setBookToEdit}
        showEditForm={showEditForm}
      />
    );
    const button = getByText("Edit");
    fireEvent.click(button);

    // Assert
    expect(setBookToEdit).toHaveBeenCalledWith(mockBook);
    expect(showEditForm).toHaveBeenCalled();
  });

  it("should call deleteBook with correct id when Delete is clicked and confirmed", () => {
    // Arrange
    const deleteBook = vi.fn();
    vi.spyOn(window, "confirm").mockReturnValue(true);

    // Act
    const { getByText } = render(
      <BookCard book={mockBook} deleteBook={deleteBook} />
    );
    const button = getByText("Delete");
    fireEvent.click(button);

    // Assert
    expect(deleteBook).toHaveBeenCalledWith({ id: 1 });

    window.confirm.mockRestore();
  });

  it("should not call deleteBook if confirm is cancelled", () => {
    // Arrange
    const deleteBook = vi.fn();
    vi.spyOn(window, "confirm").mockReturnValue(false);

    // Act
    const { getByText } = render(
      <BookCard book={mockBook} deleteBook={deleteBook} />
    );
    const button = getByText("Delete");
    fireEvent.click(button);

    // Assert
    expect(deleteBook).not.toHaveBeenCalled();

    // Cleanup the mock
    window.confirm.mockRestore();
  });
});
