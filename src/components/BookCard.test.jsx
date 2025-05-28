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
});
