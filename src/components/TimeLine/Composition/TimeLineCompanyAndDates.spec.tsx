import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { useLanguageStore } from "../../../factory/STORE_FACTORY/impls";
import { Experience } from "../types";
import { TimeLineCompanyAndDates } from "./TimeLineCompanyAndDates";

// Mocking the useLanguageStore hook
jest.mock("../../../factory/STORE_FACTORY/impls", () => ({
  useLanguageStore: jest.fn(),
}));

describe("TimeLineCompanyAndDates", () => {
  const mockExperience: Experience = {
    company: "Example Company",
    dateEN: "January 2020 - Present",
    datePT: "Janeiro 2020 - Presente",
    positionPT: "",
    positionEN: "",
    descriptionPT: "",
    descriptionEN: "",
  };

  it("displays the correct company name", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
    render(<TimeLineCompanyAndDates experience={mockExperience} />);
    expect(screen.getByText("Example Company")).toBeInTheDocument();
  });

  it("displays the correct date in English", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
    render(<TimeLineCompanyAndDates experience={mockExperience} />);
    expect(screen.getByText("January 2020 - Present")).toBeInTheDocument();
  });

  it("displays the correct date in Portuguese", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt",
    });
    render(<TimeLineCompanyAndDates experience={mockExperience} />);
    expect(screen.getByText("Janeiro 2020 - Presente")).toBeInTheDocument();
  });

  it("applies the correct classes for styling", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
    render(<TimeLineCompanyAndDates experience={mockExperience} />);
    const companyElement = screen.getByText("Example Company");
    const dateElement = screen.getByText("January 2020 - Present");

    expect(companyElement).toHaveClass("font-light txt-100 lg:text-xl");
    expect(dateElement).toHaveClass("text-sm text-Primary lg:text-base");
  });
});
