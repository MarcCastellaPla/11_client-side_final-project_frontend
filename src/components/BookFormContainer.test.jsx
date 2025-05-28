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

  it("should print a <form> when isFormVisible is true", () => {
    const { getByRole } = render(<BookFormContainer isFormVisible={true} />);

    const firstInput = getByRole("input")[0];

    const form = firstInput.closest("form");

    // Assert
    expect(form.tagName).toBe("FORM");
  });
});
