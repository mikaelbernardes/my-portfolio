/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import React from "react";

import {
  useLanguageStore,
  useThemeStore,
} from "../../factory/STORE_FACTORY/impls";
import { PerfilSection } from "./PerfilSection";

// Mocking necessary modules
jest.mock("../../factory/STORE_FACTORY/impls", () => ({
  useLanguageStore: jest.fn(),
  useThemeStore: jest.fn(),
}));

jest.mock("../../components/SectionComponent", () => ({
  SectionComponent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("PerfilSection", () => {
  beforeEach(() => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
  });

  it("should render the theme icon and text in English when theme is light and language is English", () => {
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      theme: "light",
      toggle: jest.fn(),
    });
    const { getByText } = render(<PerfilSection />);

    // Check if the text is in English
    expect(getByText("Mikael Bernardes")).toBeInTheDocument();
    expect(getByText("Frontend Developer")).toBeInTheDocument();
  });

  it("should render the theme icon and text in Portuguese when language is Portuguese", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt-BR",
    });
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      theme: "light",
      toggle: jest.fn(),
    });
    const { getByText } = render(<PerfilSection />);

    // Check if the text is in Portuguese
    expect(getByText("Mikael Bernardes")).toBeInTheDocument();
    expect(getByText("Desenvolvedor Frontend")).toBeInTheDocument();
  });

  it("should toggle theme when the icon is clicked", () => {
    const toggleMock = jest.fn();
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      theme: "dark",
      toggle: toggleMock,
    });
    const { container } = render(<PerfilSection />);

    // Check if the dark theme icon is rendered
    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("text-3xl text-Primary");

    // Simulate click to toggle theme
    fireEvent.click(icon!);

    // Check if toggle function was called
    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
