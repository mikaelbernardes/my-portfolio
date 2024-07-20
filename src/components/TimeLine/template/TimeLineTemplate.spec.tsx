/* eslint-disable jest/no-conditional-expect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Experience } from "../types";
import { TimelineTemplate, TimelineTemplateProps } from "./TimeLineTemplate";

// Mock the child component
jest.mock("./TimeLineItemTemplate", () => ({
  TimelineItemTemplate: ({ experience, isLast }: any) => (
    <div data-testid="TimelineItemTemplate">
      <span>{experience.company}</span>
      <span>{isLast ? "last" : "not last"}</span>
    </div>
  ),
}));

describe("TimelineTemplate", () => {
  const mockData: Experience[] = [
    {
      company: "Company A",
      dateEN: "January 2020 - Present",
      datePT: "Janeiro 2020 - Presente",
      positionEN: "Software Engineer",
      positionPT: "Engenheiro de Software",
      descriptionEN: "Developing software at Company A.",
      descriptionPT: "Desenvolvendo software na Company A.",
    },
    {
      company: "Company B",
      dateEN: "February 2018 - December 2019",
      datePT: "Fevereiro 2018 - Dezembro 2019",
      positionEN: "Junior Developer",
      positionPT: "Desenvolvedor Junior",
      descriptionEN: "Developing software at Company B.",
      descriptionPT: "Desenvolvendo software na Company B.",
    },
  ];

  const defaultProps: TimelineTemplateProps = {
    data: mockData,
  };

  it("renders the correct number of TimelineItemTemplate components", () => {
    render(<TimelineTemplate {...defaultProps} />);
    const items = screen.getAllByTestId("TimelineItemTemplate");
    expect(items.length).toBe(mockData.length);
  });

  it("passes the correct props to TimelineItemTemplate components", () => {
    render(<TimelineTemplate {...defaultProps} />);
    const items = screen.getAllByTestId("TimelineItemTemplate");

    items.forEach((item, index) => {
      expect(item).toHaveTextContent(mockData[index].company);
      if (index === mockData.length - 1) {
        expect(item).toHaveTextContent("last");
      } else {
        expect(item).toHaveTextContent("not last");
      }
    });
  });

  it("renders the vertical line correctly", () => {
    const { container } = render(<TimelineTemplate {...defaultProps} />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const verticalLine = container.querySelector(
      ".absolute.inset-0.w-px.left-40",
    );
    expect(verticalLine).toBeInTheDocument();
  });
});
