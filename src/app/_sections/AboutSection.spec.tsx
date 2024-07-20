/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import React from "react";

import { useLanguageStore } from "../../factory/STORE_FACTORY/impls";
import { AboutSection } from "./AboutSection";

// Mock the useLanguageStore hook
jest.mock("../../factory/STORE_FACTORY/impls", () => ({
  useLanguageStore: jest.fn(),
}));

describe("AboutSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly in English", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });

    const { getByText } = render(<AboutSection />);

    expect(getByText("About me")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("me")).toBeInTheDocument();
  });

  it("renders correctly in Portuguese", () => {
    // Mock the language to Portuguese
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt",
    });

    const { getByText } = render(<AboutSection />);

    expect(getByText("Sobre mim")).toBeInTheDocument();
    expect(getByText("Sobre")).toBeInTheDocument();
    expect(getByText("mim")).toBeInTheDocument();
  });
});
