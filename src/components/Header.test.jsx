import { describe, it, expect } from "vitest";
import { Header } from "./Header";
import { render } from "@testing-library/react";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

describe("Given Header", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should print an H1 as a header", () => {
    // Act
    const { getByRole } = render(<Header />);
    const headerTitle = getByRole("heading");

    // Assert
    expect(headerTitle.tagName).toBe("H1");
  });

  it("Should print 'My Book Collection' as header text", () => {
    // Act
    const { getByText } = render(<Header />);
    const header = getByText("My Book Collection");

    // Assert
    expect(header.textContent).toBe("My Book Collection");
  });

  it("Should have only one heading in the document", () => {
    // Act
    const { queryAllByRole } = render(<Header />);
    const headings = queryAllByRole("heading");

    // Assert
    expect(headings.length).toBe(1);
  });

  it("Should include the CSS class 'header__title'", () => {
    // Act
    const { getByRole } = render(<Header />);
    const headerTitle = getByRole("heading");
    
    // Assert
    expect(headerTitle.className).toContain("header__title");
  });
});
