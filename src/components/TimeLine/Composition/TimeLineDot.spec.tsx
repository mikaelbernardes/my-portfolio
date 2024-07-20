import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { TimelineDot } from "./TimeLineDot";

describe("TimelineDot", () => {
  it("applies the correct classes for styling", () => {
    render(<TimelineDot />);
    const dotElement = screen.getByRole("presentation");

    expect(dotElement).toHaveClass("w-4 h-4 bg-Primary rounded-full z-10");
  });
});
