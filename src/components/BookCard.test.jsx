import { describe, it, expect } from "vitest";
import { BookCard } from "./BookCard";
import { render } from "@testing-library/react";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

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
    const author = getByText("Book author");
    // Assert
    expect(author.tagName).toBe("P");
  });

  it("should print a paragraph with the correct year", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);
    const year = getByText("1");
    // Assert
    expect(year.tagName).toBe("P");
  });

  it("should print a span with the correct status", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);
    const status = getByText("pending");
    // Assert
    expect(status.tagName).toBe("SPAN");
  });

  it("should have a 'Delete' button", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);
    const deleteButton = getByText("Delete");
    // Assert
    expect(deleteButton.tagName).toBe("BUTTON");
  });
});
