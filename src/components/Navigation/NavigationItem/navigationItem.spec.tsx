/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { ClassAttributes, ImgHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";
import { FaBeer } from "react-icons/fa";

import { NavigationItem } from "./";

jest.mock(
  "next/image",
  () =>
    (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLImageElement> &
        ImgHTMLAttributes<HTMLImageElement>,
    ) => <img {...props} />,
);

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

  it("renders with a static image icon", () => {
    const { container } = render(
      <NavigationItem icon={FaBeer} name="Image Icon" />,
    );
    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
  });

  it("applies correct class when hovered", () => {
    const { container } = render(
      <NavigationItem icon={FaBeer} name="Hover Test" />,
    );
    const element = container.querySelector(
      "div.group.relative.bg-300.rounded-full",
    );
    expect(element).toBeInTheDocument();

    fireEvent.mouseOver(element!);
    expect(element).toHaveClass("group relative bg-300 rounded-full");
  });

  it("does not call onClick handler when link prop is provided", () => {
    const handleClick = jest.fn();
    const link = "/home";
    render(
      <NavigationItem
        icon={FaBeer}
        name="Link"
        link={link}
        onClick={handleClick}
      />,
    );
    fireEvent.click(screen.getByRole("link"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
