import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { ContactComponent, ContactComponentProps } from ".";

describe("ContactComponent", () => {
  const defaultProps: ContactComponentProps = {
    label: "Email",
    value: "example@example.com",
    link: "mailto:example@example.com",
  };

  it("displays the correct label and value", () => {
    render(<ContactComponent {...defaultProps} />);
    expect(screen.getByText(/Email:/)).toBeInTheDocument();
    expect(screen.getByText("example@example.com")).toBeInTheDocument();
  });

  it("renders the link with the correct href", () => {
    render(<ContactComponent {...defaultProps} />);
    const linkElement = screen.getByText("example@example.com");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "mailto:example@example.com");
  });

  it("opens the link in a new tab", () => {
    render(<ContactComponent {...defaultProps} />);
    const linkElement = screen.getByText("example@example.com");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  it("applies the correct classes for styling", () => {
    render(<ContactComponent {...defaultProps} />);
    const paragraphElement = screen.getByText(/Email:/);
    const linkElement = screen.getByText("example@example.com");

    expect(paragraphElement).toHaveClass(
      "txt-300 sm:text-sm md:text-lg lg:text-lg",
    );
    expect(linkElement).toHaveClass(
      "txt-100 ml-3 transition-all sm:text-sm md:text-lg lg:text-lg hover:text-Primary",
    );
  });
});
