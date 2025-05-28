// BookForm.test.tsx
import { describe, it, expect } from "vitest";
import { BookForm } from "./BookForm";
import { render } from "@testing-library/react";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

describe("Given BookForm", () => {
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
    // Arrange
    const expectedYear = new Date().getFullYear().toString();

    // Act
    const { getByDisplayValue } = render(<BookForm />);
    const yearInput = getByDisplayValue(expectedYear);

    // Assert
    expect(yearInput.tagName).toBe("INPUT");
    expect(yearInput.value).toBe(expectedYear);
  });

  it("should have 'Pending' as one of the options", () => {
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

  it("should have a submit button with 'Add Book' text", () => {
    // Act
    const { getByText } = render(<BookForm />);
    const submitButton = getByText("Add Book");

    // Assert
    expect(submitButton.tagName).toBe("BUTTON");

  });

  it("should have a submit button with 'Edit Book' text when editing", () => {
    // Arrange
    const mockBook = { id: 1, title: "X", author: "Y", year: 2022, status: "read" };

    // Act
    const { getByText } = render(<BookForm bookToEdit={mockBook} />);
    const editButton = getByText("Edit Book");

    // Assert
    expect(editButton.tagName).toBe("BUTTON");
  });

  it("should have a button with 'Edit Book' as text when editing", () => {
  // Arrange
  const mockBook = { id: 1, title: "X", author: "Y", year: 2022, status: "read" };

  // Act
  const { getByText } = render(<BookForm bookToEdit={mockBook} />);
  const editButton = getByText("Edit Book");

  // Assert
  expect(editButton.tagName).toBe("BUTTON");
});
  
});
