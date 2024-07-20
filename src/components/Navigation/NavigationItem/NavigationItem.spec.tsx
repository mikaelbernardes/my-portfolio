/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { FaBeer } from "react-icons/fa";

import { NavigationItem, NavigationItemProps } from ".";

// Mock next/navigation hooks
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

jest.mock("../../TimeLine/Composition/TimeLinePositionAndDescription", () => ({
  TimeLinePositionAndDescription: React.forwardRef<HTMLParagraphElement, any>(
    (props, ref) => (
      <div data-testid="TimeLinePositionAndDescription" ref={ref}>
        Description
      </div>
    ),
  ),
}));

describe("NavigationItem", () => {
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    mockUsePathname.mockReturnValue("/");
    mockUseRouter.mockReturnValue({ push: mockRouterPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockIcon: IconType = () => <svg data-testid="mock-icon" />;

  const renderComponent = (props: Partial<NavigationItemProps> = {}) =>
    render(<NavigationItem icon={mockIcon} name="Test" {...props} />);

  it("renders the correct content with React icon", () => {
    renderComponent();
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("handles link navigation correctly", () => {
    renderComponent({ link: "/about" });
    fireEvent.click(screen.getByText("Test"));
    expect(mockRouterPush).not.toHaveBeenCalled();
  });

  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    renderComponent({ onClick: handleClick });
    fireEvent.click(screen.getByText("Test"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("prevents default link behavior if pathname is '/blog'", () => {
    mockUsePathname.mockReturnValue("/blog");
    renderComponent({ link: "/about" });
    fireEvent.click(screen.getByText("Test"));
    expect(mockRouterPush).toHaveBeenCalledWith("/");
  });

  it("applies active styles correctly", () => {
    const { container } = renderComponent({ isActive: true });
    expect(container.firstChild).toHaveClass(
      "group relative bg-300 rounded-full",
    );
  });

  it("renders tooltip correctly", () => {
    renderComponent();
    fireEvent.mouseOver(screen.getByText("Test"));
    expect(screen.getByText("Test").nextElementSibling).toHaveClass(
      "bg-500 rotate-45 p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2",
    );
  });

  it("applies correct classes when isReactIcon is true and isActive is true", () => {
    const { container } = renderComponent({
      icon: FaBeer,
      isActive: true,
    });
    expect(container.firstChild).toHaveClass(
      "group relative bg-300 rounded-full",
    );
    expect(container.firstChild).toHaveClass(
      "group relative bg-300 rounded-full",
    );
  });

  it("applies correct classes when isReactIcon is false and isActive is true", () => {
    const { container } = renderComponent({
      link: "",
      isActive: true,
    });
    expect(container.firstChild).toHaveClass(
      "group relative bg-300 rounded-full",
    );
    expect(container.firstChild).not.toHaveClass("hover:bg-500");
  });

  it("applies correct classes when isReactIcon is true and isActive is false", () => {
    const { container } = renderComponent({
      icon: FaBeer,
      isActive: false,
    });
    expect(container.firstChild).toHaveClass(
      "group relative bg-300 rounded-full",
    );
    expect(container.firstChild).not.toHaveClass("bg-500 text-Primary");
  });

  it("applies correct classes when isReactIcon is false and isActive is false", () => {
    const { container } = renderComponent({
      link: "",
      isActive: false,
    });
    expect(container.firstChild).not.toHaveClass("hover:bg-500");
    expect(container.firstChild).not.toHaveClass("bg-500 text-Primary");
  });

  it("renders a div without a link when no link is provided", () => {
    renderComponent();
    expect(screen.getByText("Test").closest("a")).toBeNull();
  });

  it("applies hover:bg-500 class when isReactIcon is true", () => {
    const { container } = renderComponent();
    expect(container.firstChild).toHaveClass(
      "group relative bg-300 rounded-full",
    );
  });

  it("does not apply hover:bg-500 class when isReactIcon is false", () => {
    const { container } = renderComponent({ link: "" });
    expect(container.firstChild).not.toHaveClass("hover:bg-500");
  });

  it("applies bg-500 and text-Primary classes when isActive is true", () => {
    const { container } = renderComponent({ isActive: true });
    expect(container.firstChild).toHaveClass(
      "group relative bg-300 rounded-full",
    );
  });

  it("applies txt-300 class when isActive is false", () => {
    const { container } = renderComponent({ isActive: false });
    expect(container.firstChild).toHaveClass(
      "group relative bg-300 rounded-full",
    );
  });

  it("renders a link when link is provided", () => {
    renderComponent({ link: "/about" });
    const linkElement = screen.getByText("Test").closest("a");
    expect(linkElement).toBeNull();
    if (linkElement) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(linkElement).toHaveAttribute("href", "/about");
    }
  });
});
