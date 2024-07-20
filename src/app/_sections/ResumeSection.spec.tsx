/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import React from "react";

import { useLanguageStore } from "../../factory/STORE_FACTORY/impls";
import { ResumeSection } from "./ResumeSection";

// Mock necessary modules
jest.mock("../../factory/STORE_FACTORY/impls", () => ({
  useLanguageStore: jest.fn(),
}));

jest.mock("../../components/TimeLine/template/TimeLineTemplate", () => ({
  TimelineTemplate: jest.fn(() => <div>Timeline Template</div>),
}));

jest.mock("../../components/SectionComponent", () => ({
  SectionComponent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("ResumeSection", () => {
  beforeEach(() => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
  });

  it("should render in English with correct text and TimelineTemplate", () => {
    const { getByText, container } = render(<ResumeSection />);

    // Check if the section title and description are in English
    expect(getByText("Professional")).toBeInTheDocument();
    expect(getByText("Experience")).toBeInTheDocument();
    expect(getByText("Specialist in software development")).toBeInTheDocument();
    expect(getByText("Strong in team leadership")).toBeInTheDocument();
    expect(getByText("complex project management")).toBeInTheDocument();
    expect(getByText("high-quality results")).toBeInTheDocument();

    expect(container.querySelector("div")).toHaveTextContent(
      "Timeline Template",
    );
  });

  it("should render in Portuguese with correct text and TimelineTemplate", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt-BR",
    });
    const { getByText, container } = render(<ResumeSection />);

    // Check if the section title and description are in Portuguese
    expect(getByText("Experiência")).toBeInTheDocument();
    expect(getByText("Profissional")).toBeInTheDocument();
    expect(
      getByText("Especialista em desenvolvimento de software"),
    ).toBeInTheDocument();
    expect(getByText("Forte em liderança de equipes")).toBeInTheDocument();
    expect(getByText("gestão de projetos complexos")).toBeInTheDocument();
    expect(getByText("resultados de alta qualidade")).toBeInTheDocument();

    // Check if TimelineTemplate is rendered
    expect(container.querySelector("div")).toHaveTextContent(
      "Timeline Template",
    );
  });
});
