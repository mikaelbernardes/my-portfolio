/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { TimeLineDotLine, TimeLineDotLineProps } from "./TimeLineDotLine";

describe("TimeLineDotLine", () => {
  const defaultProps: TimeLineDotLineProps = {
    isLast: false,
    lineHeight: 100,
  };

  it("renders the TimelineDot", () => {
    render(<TimeLineDotLine {...defaultProps} />);
    const dotElement = screen.getByRole("presentation");
    expect(dotElement).toBeInTheDocument();
  });

  it("renders the line when isLast is false", () => {
    render(<TimeLineDotLine {...defaultProps} />);
    const lineElement = screen.getByTestId("line-element");
    expect(lineElement).toBeInTheDocument();
  });

  it("does not render the line when isLast is true", () => {
    render(<TimeLineDotLine isLast={true} lineHeight={100} />);
    const lineElement = screen.queryByTestId("line-element");
    expect(lineElement).not.toBeInTheDocument();
  });

  it("applies the correct height to the line", () => {
    render(<TimeLineDotLine {...defaultProps} />);
    const lineElement = screen.getByTestId("line-element");
    expect(lineElement).toHaveStyle("height: 220px"); // lineHeight (100) + 120
  });

  it("applies default height to the line when lineHeight is null", () => {
    render(<TimeLineDotLine isLast={false} lineHeight={null} />);
    const lineElement = screen.getByTestId("line-element");
    expect(lineElement).toHaveStyle("height: 100%");
  });

  it("applies the correct classes for styling", () => {
    render(<TimeLineDotLine {...defaultProps} />);
    const containerElement = screen.getByRole("presentation").parentElement;
    expect(containerElement).toHaveClass(
      "sm:hidden md:hidden lg:flex flex-col items-center mt-[6px]",
    );
    const lineElement = screen.getByTestId("line-element");
    expect(lineElement).toHaveClass(
      "w-px absolute bg-TXT300Light dark:bg-TXT300Dark",
    );
  });
});
