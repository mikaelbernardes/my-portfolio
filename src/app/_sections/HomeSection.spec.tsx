/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import React from "react";

import { useLanguageStore } from "../../factory/STORE_FACTORY/impls";
import { HomeSection } from "./HomeSection";

// Mocking necessary modules
jest.mock("../../factory/STORE_FACTORY/impls", () => ({
  useLanguageStore: jest.fn(),
}));

jest.mock("../../components/SectionComponent", () => ({
  SectionComponent: ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

describe("HomeSection", () => {
  beforeEach(() => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
  });

  it("should render the title and content in English when language is set to English", () => {
    const { getByText } = render(<HomeSection />);

    // Check if the title is in English
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Pleno")).toBeInTheDocument();
    expect(getByText("Frontend Developer")).toBeInTheDocument();
  });

  it("should render the title and content in Portuguese when language is set to Portuguese", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt",
    });
    const { getByText } = render(<HomeSection />);

    // Check if the title is in Portuguese
    expect(getByText("Início")).toBeInTheDocument();
    expect(getByText("Desenvolvedor Frontend")).toBeInTheDocument();
    expect(getByText("Pleno")).toBeInTheDocument();
  });
});
