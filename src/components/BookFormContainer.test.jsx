import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BookFormContainer } from "./BookFormContainer";

describe("Given BookFormContainer", () => {
  afterEach(() => {
    cleanup();
  });

  it("should print a button with 'Add New Book' as text", () => {
    // Act
    const { getByText } = render(<BookFormContainer />);
    const button = getByText("Add New Book");

    // Assert
    expect(button.tagName).toBe("BUTTON");
  });

  it("should print a button with 'Cancel' as text when the form is visible", () => {
    // Act
    const { getByText } = render(<BookFormContainer isFormVisible={true} />);
    const button = getByText("Cancel");

    // Assert
    expect(button.tagName).toBe("BUTTON");
  });

  it("should not render any <form> element when the form is hidden", () => {
    // Act
    const { queryByRole } = render(<BookFormContainer />);
    const form = queryByRole("form");

    // Assert
    expect(form).toBeNull();
  });

  it("should render the BookForm heading when the form is visible", () => {
    // Act
    const { getByText } = render(<BookFormContainer isFormVisible={true} />);
    const heading = getByText(/add new book/i);

    // Assert
    expect(heading.tagName).toBe("H2");
  });

  it("should call toggleFormVisibility and setBookToEdit when clicking cancel button", () => {
    // Arrange
    const toggleFormVisibility = vi.fn();
    const setBookToEdit = vi.fn();
    const bookToEdit = {
      id: 1,
      title: "test",
      author: "author",
      year: "2024",
      status: "pending",
    };

    // Act
    const { getByText } = render(
      <BookFormContainer
        isFormVisible={true}
        toggleFormVisibility={toggleFormVisibility}
        setBookToEdit={setBookToEdit}
        bookToEdit={bookToEdit}
      />
    );
    const button = getByText("Cancel");
    fireEvent.click(button);

    // Assert
    expect(setBookToEdit).toHaveBeenCalledWith(null);
    expect(toggleFormVisibility).toHaveBeenCalled();
  });
});
