import { describe, it, expect } from "vitest";
import { BookForm } from "./BookForm";
import { render } from "@testing-library/react";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

describe("Given BookForm", () => {
  // IMPORTANT: Add more tests
  afterEach(() => {
    cleanup();
  });
  it("should have 'Enter book title' as placeholder", () => {
    // Act
    const { getByPlaceholderText } = render(<BookForm />);

    const bookTitlePlaceholder = getByPlaceholderText("Enter book title");

    // Assert
    expect(bookTitlePlaceholder.tagName).toBe("INPUT");
  });

  it("should have 'Enter your author name' as placeholder", () => {
    // Act
    const { getByPlaceholderText } = render(<BookForm />);

    const bookAuthor = getByPlaceholderText("Enter your author name");

    // Assert
    expect(bookAuthor.tagName).toBe("INPUT");
  });

  it("should have the actual year as display value and be an input", () => {
    // Arrenge
    const expectedYear = new Date().getFullYear();
    const stringExpectedYear = expectedYear.toString();

    // Act
    const { getByDisplayValue } = render(<BookForm />);

    const year = getByDisplayValue("2025");

    // Assert
    expect(year.tagName).toBe("INPUT");
    expect(year.value).toBe(stringExpectedYear);
  });

  it("Should have pending as an option", () => {
    // Act
    const { getByText } = render(<BookForm />);

    const option = getByText("Pending");

    // Assert
    expect(option.tagName).toBe("OPTION");
  });

  it("should have a heading with 'Add a New Book'", () => {
  // Act
  const { getByText } = render(<BookForm />);
  const heading = getByText("Add a New Book");

  // Assert
  expect(heading.tagName).toBe("H2");
});

});
