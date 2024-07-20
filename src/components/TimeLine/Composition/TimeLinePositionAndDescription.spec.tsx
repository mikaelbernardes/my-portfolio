/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { useLanguageStore } from "../../../factory/STORE_FACTORY/impls";
import { Experience } from "../types";
import {
  TimeLinePositionAndDescription,
  TimeLinePositionAndDescriptionProps,
} from "./TimeLinePositionAndDescription";

// Mocking the useLanguageStore hook
jest.mock("../../../factory/STORE_FACTORY/impls", () => ({
  useLanguageStore: jest.fn(),
}));

describe("TimeLinePositionAndDescription", () => {
  const mockExperience: Experience = {
    company: "Example Company",
    dateEN: "January 2020 - Present",
    datePT: "Janeiro 2020 - Presente",
    positionEN: "Software Engineer",
    positionPT: "Engenheiro de Software",
    descriptionEN: "Developing awesome software.",
    descriptionPT: "Desenvolvendo software incrível.",
  };

  const defaultProps: TimeLinePositionAndDescriptionProps = {
    experience: mockExperience,
    descriptionRef: React.createRef<HTMLParagraphElement>(),
  };

  it("displays the correct position in English", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
    render(<TimeLinePositionAndDescription {...defaultProps} />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("displays the correct position in Portuguese", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt",
    });
    render(<TimeLinePositionAndDescription {...defaultProps} />);
    expect(screen.getByText("Engenheiro de Software")).toBeInTheDocument();
  });

  it("displays the correct description in English", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
    render(<TimeLinePositionAndDescription {...defaultProps} />);
    expect(
      screen.getByText("Developing awesome software."),
    ).toBeInTheDocument();
  });

  it("displays the correct description in Portuguese", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt",
    });
    render(<TimeLinePositionAndDescription {...defaultProps} />);
    expect(
      screen.getByText("Desenvolvendo software incrível."),
    ).toBeInTheDocument();
  });

  it("applies the correct classes for styling", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
    render(<TimeLinePositionAndDescription {...defaultProps} />);
    const positionElement = screen.getByText("Software Engineer");
    const descriptionElement = screen.getByText("Developing awesome software.");

    expect(positionElement).toHaveClass("font-medium lg:text-[26px] txt-100");
    expect(descriptionElement).toHaveClass(
      "font-light lg:text-base txt-300 sm:w-full w-80",
    );
  });

  it("uses the provided ref for the description paragraph", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
    const { getByText } = render(
      <TimeLinePositionAndDescription {...defaultProps} />,
    );
    const descriptionElement = getByText("Developing awesome software.");
    expect(defaultProps.descriptionRef.current).toBe(descriptionElement);
  });
});
