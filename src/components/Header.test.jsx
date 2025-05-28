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
});
