import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
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
});
