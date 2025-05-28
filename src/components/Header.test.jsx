import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { Header } from "./Header";

describe("Given Header", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render exactly one heading element", () => {
    // Act
    const { getAllByRole } = render(<Header />);
    const headings = getAllByRole("heading");

    // Assert
    expect(headings.length).toBe(1);
  });

  it("should render an H1 with the correct text", () => {
    // Act
    const { getByRole } = render(<Header />);
    const h1 = getByRole("heading");

    // Assert
    expect(h1.tagName).toBe("H1");
    expect(h1.textContent).toBe("My Book Collection");
  });

  it("should include the 'header__title' CSS class", () => {
    // Act
    const { getByRole } = render(<Header />);
    const h1 = getByRole("heading");

    // Assert
    expect(h1.className).toContain("header__title");
  });
});
