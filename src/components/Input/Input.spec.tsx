import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from ".";

describe("Input", () => {
  it("renders input with correct type", () => {
    render(<Input />);
    const inputElement = screen.getByRole("searchbox");
    expect(inputElement).toHaveAttribute("type", "search");
  });

  it("renders input with provided props", () => {
    render(<Input placeholder="Search..." />);
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChange handler when input changes", async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole("searchbox");
    await userEvent.type(inputElement, "test");
    expect(handleChange).toHaveBeenCalledTimes(4); // Called for each character typed
  });

  it("applies the correct classes for styling", () => {
    render(<Input />);
    const inputElement = screen.getByRole("searchbox");
    expect(inputElement).toHaveClass(
      "h-9 w-full rounded-md bg-500 px-3 focus:outline-none focus:outline-2 focus:outline-Primary txt-100 placeholder:txt-300 search-input",
    );
  });

  it("renders search icon with correct classes", () => {
    render(<Input />);
    const searchIcon = screen.getByText(
      (content, element) => element?.tagName.toLowerCase() === "svg",
    );
    expect(searchIcon).toHaveClass(
      "txt-100 text-2xl absolute right-3 top-1/2 -translate-y-1/2",
    );
  });
});
