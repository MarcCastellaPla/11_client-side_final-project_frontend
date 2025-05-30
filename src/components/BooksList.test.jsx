import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BooksList } from "./BooksList";

describe("Given BooksList", () => {
  const mockBooks = [
    {
      id: 1,
      title: "Book test",
      author: "Book author",
      year: "1",
      status: "pending",
    },
  ];

  afterEach(() => {
    cleanup();
  });

  it("should print an unordered list", () => {
    // Act
    const { getByRole } = render(<BooksList books={mockBooks} />);
    const list = getByRole("list");

    // Assert
    expect(list.tagName).toBe("UL");
  });

  it("should print a paragraph with the correct author", () => {
    // Act
    const { getByText } = render(<BooksList books={mockBooks} />);
    const authorParagraph = getByText("Book author");

    // Assert
    expect(authorParagraph.tagName).toBe("P");
  });

  it("should print a paragraph with the correct year", () => {
    // Act
    const { getByText } = render(<BooksList books={mockBooks} />);
    const yearParagraph = getByText("1");

    // Assert
    expect(yearParagraph.tagName).toBe("P");
  });

  it("should print a span with the correct status", () => {
    // Act
    const { getByText } = render(<BooksList books={mockBooks} />);
    const statusSpan = getByText("pending");

    // Assert
    expect(statusSpan.tagName).toBe("SPAN");
  });

  it("should print the loading message when isLoading is true", () => {
    // Act
    const { getByText } = render(<BooksList books={mockBooks} isLoading={true} />);
    const loadingHeader = getByText("Loading Books...");

    // Assert
    expect(loadingHeader.tagName).toBe("H3");
  });
});
