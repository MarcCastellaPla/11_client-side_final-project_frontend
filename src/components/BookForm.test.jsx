import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BookForm } from "./BookForm";

describe("Given BookForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("should have 'Enter book title' as placeholder", () => {
    // Act
    const { getByPlaceholderText } = render(<BookForm />);
    const input = getByPlaceholderText("Enter book title");

    // Assert
    expect(input.tagName).toBe("INPUT");
  });

  it("should have 'Enter your author name' as placeholder", () => {
    // Act
    const { getByPlaceholderText } = render(<BookForm />);
    const input = getByPlaceholderText("Enter your author name");

    // Assert
    expect(input.tagName).toBe("INPUT");
  });

  it("should have the current year as display value in the year input", () => {
    // Arrange
    const expectedYear = new Date().getFullYear().toString();

    // Act
    const { getByDisplayValue } = render(<BookForm />);
    const yearInput = getByDisplayValue(expectedYear);

    // Assert
    expect(yearInput.tagName).toBe("INPUT");
    expect(yearInput.value).toBe(expectedYear);
  });

  it("should have 'Pending' as a status option", () => {
    // Act
    const { getByText } = render(<BookForm />);
    const option = getByText("Pending");

    // Assert
    expect(option.tagName).toBe("OPTION");
  });

  it("should have a heading with 'Add New Book'", () => {
    // Act
    const { getByText } = render(<BookForm />);
    const heading = getByText(/add new book/i);

    // Assert
    expect(heading.tagName).toBe("H2");
  });
});
