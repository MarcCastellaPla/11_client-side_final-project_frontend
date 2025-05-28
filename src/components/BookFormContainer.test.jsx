import { describe, it, expect } from "vitest";
import { BookFormContainer } from "./BookFormContainer";
import { render } from "@testing-library/react";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

describe("Given BookFormContainer", () => {
  afterEach(() => {
    cleanup();
  });
  it("should print a button with 'Add New Book' as text", () => {
    // Act
    const { getByText } = render(<BookFormContainer />);
    const bookFormButton = getByText("Add New Book");

    // Assert
    expect(bookFormButton.tagName).toBe("BUTTON");
  });

  it("should print a button with 'Cancel' as text when the bookForm is visible", () => {
    // Act
    const { getByText } = render(<BookFormContainer isFormVisible={true} />);
    const bookFormButton = getByText("Cancel");

    // Assert
    expect(bookFormButton.tagName).toBe("BUTTON");
  });
    // Act
    it("should not render any <form> element when the form is hidden", () => {
    const { queryByRole } = render(<BookFormContainer />);
    const form = queryByRole("form");

    // Assert
    expect(form).toBeNull();
  });

  it("should render the BookForm heading when the form is visible", () => {
    // Act
    const { getByText } = render(<BookFormContainer isFormVisible={true} />);
    const heading = getByText("Add a New Book");

    // Assert
    expect(heading.tagName).toBe("H2");
  });


});
