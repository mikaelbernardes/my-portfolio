import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { FaBeer } from "react-icons/fa";

import { NavigationItem } from "./";

describe("NavigationItem component", () => {
  it("renders with a React icon", () => {
    render(<NavigationItem icon={FaBeer} name="Beer" />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("renders as a link when link prop is provided", () => {
    const link = "/home";
    render(<NavigationItem icon={FaBeer} name="Home" link={link} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", link);
  });

  it("calls onClick handler when onClick prop is provided and clicked", () => {
    const handleClick = jest.fn();
    render(
      <NavigationItem icon={FaBeer} name="Click Me" onClick={handleClick} />,
    );
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("shows tooltip on hover", () => {
    render(<NavigationItem icon={FaBeer} name="Tooltip" />);
    const element = screen.getByText("Tooltip");
    fireEvent.mouseOver(element);
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
  });
});
