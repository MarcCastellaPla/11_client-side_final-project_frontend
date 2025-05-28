import { describe, it, expect } from "vitest";
import { BooksList } from "./BooksList";
import { render } from "@testing-library/react";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

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
  console.log(mockBooks);

  afterEach(() => {
    cleanup();
  });
  it("should print an unordered list", () => {
    // Act
    const { getByRole } = render(<BooksList books={mockBooks} />);
    const unorderedList = getByRole("list");

    // Assert
    expect(unorderedList.tagName).toBe("UL");
  });

  it("should print a p with the correct book author", () => {
    // Act
    const { getByText } = render(<BooksList books={mockBooks} />);
    const paragraph = getByText("Book author");

    // Assert
    expect(paragraph.tagName).toBe("P");
  });

  it("should print a parahraph with the correct year", () => {
    // Act
    const { getByText } = render(<BooksList books={mockBooks} />);
    const paragraph = getByText("1");

    // Assert
    expect(paragraph.tagName).toBe("P");
  });

  it("should print a span with the correct status", () => {
    // Act
    const { getByText } = render(<BooksList books={mockBooks} />);
    const span = getByText("pending");

    // Assert
    expect(span.tagName).toBe("SPAN");
  });
});
