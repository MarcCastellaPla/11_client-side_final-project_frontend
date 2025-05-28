import { describe, test, expect } from "vitest";
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
  test("When BookCard is rendered Then an h4 with the title should be printed", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);

    const title = getByText("Book test");

    // Assert

    expect(title.tagName).toBe("H4");
  });

  test("When BookCard is rendered Then a p with the author should be printed", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);

    const paragraph = getByText("Book author");

    // Assert
    expect(paragraph.tagName).toBe("P");
  });

  test("When BookCard is rendered Then a p with the year should be printed", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);

    const paragraph = getByText("1");

    // Assert
    expect(paragraph.tagName).toBe("P");
  });

  test("When BookCard is rendered Then a span with the status should be printed", () => {
    // Act
    const { getByText } = render(<BookCard book={mockBook} />);

    const span = getByText("pending");

    // Assert
    expect(span.tagName).toBe("SPAN");
  });
});
