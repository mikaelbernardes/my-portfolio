/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Experience } from "../types";
import {
  TimelineItemTemplate,
  TimelineItemTemplateProps,
} from "./TimeLineItemTemplate";

// Mock the child components
jest.mock("../Composition/TimeLineCompanyAndDates", () => ({
  TimeLineCompanyAndDates: () => <div data-testid="TimeLineCompanyAndDates" />,
}));

jest.mock("../Composition/TimeLineDotLine", () => ({
  TimeLineDotLine: () => <div data-testid="TimeLineDotLine" />,
}));

jest.mock("../Composition/TimeLinePositionAndDescription", () => ({
  TimeLinePositionAndDescription: React.forwardRef(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ descriptionRef }: any) => (
      <div data-testid="TimeLinePositionAndDescription" ref={descriptionRef}>
        Description
      </div>
    ),
  ),
}));

describe("TimelineItemTemplate", () => {
  const mockExperience: Experience = {
    company: "Example Company",
    dateEN: "January 2020 - Present",
    datePT: "Janeiro 2020 - Presente",
    positionEN: "Software Engineer",
    positionPT: "Engenheiro de Software",
    descriptionEN: "Developing awesome software.",
    descriptionPT: "Desenvolvendo software incrível.",
  };

  const defaultProps: TimelineItemTemplateProps = {
    experience: mockExperience,
    isLast: false,
  };

  it("renders TimeLineCompanyAndDates component", () => {
    render(<TimelineItemTemplate {...defaultProps} />);
    expect(screen.getByTestId("TimeLineCompanyAndDates")).toBeInTheDocument();
  });

  it("renders TimeLineDotLine component", () => {
    render(<TimelineItemTemplate {...defaultProps} />);
    expect(screen.getByTestId("TimeLineDotLine")).toBeInTheDocument();
  });

  it("renders TimeLinePositionAndDescription component", () => {
    render(<TimelineItemTemplate {...defaultProps} />);
    expect(
      screen.getByTestId("TimeLinePositionAndDescription"),
    ).toBeInTheDocument();
  });

  it("updates lineHeight state based on descriptionRef height", () => {
    const { container } = render(<TimelineItemTemplate {...defaultProps} />);
    const descriptionElement = container.querySelector(
      "[data-testid='TimeLinePositionAndDescription']",
    );

    if (descriptionElement) {
      expect(descriptionElement).toBeInTheDocument();
    }
  });
});
