/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import React from "react";

import { useLanguageStore } from "../../factory/STORE_FACTORY/impls";
import { contactsData } from "./ContactsData";
import { ContactsSection } from "./ContactsSection";

// Mocking necessary modules
jest.mock("../../factory/STORE_FACTORY/impls", () => ({
  useLanguageStore: jest.fn(),
}));

jest.mock("../../components/ContactComponent", () => ({
  ContactComponent: ({
    label,
    link,
    value,
  }: {
    label: string;
    link: string;
    value: string;
  }) => (
    <div data-testid="contact-component">
      <span>{label}</span>
      <a href={link}>{value}</a>
    </div>
  ),
}));

describe("ContactsSection", () => {
  beforeEach(() => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
  });

  it("should render the title in English when language is set to English", () => {
    const { getByText } = render(<ContactsSection />);
    expect(getByText("Contacts")).toBeInTheDocument();
  });

  it("should render the title in Portuguese when language is set to Portuguese", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt",
    });
    const { getByText } = render(<ContactsSection />);
    expect(getByText("Contatos")).toBeInTheDocument();
  });

  it("should render all ContactComponent instances with correct data", () => {
    const { getAllByTestId, getByText } = render(<ContactsSection />);

    // Check that ContactComponent instances are rendered
    const contactComponents = getAllByTestId("contact-component");
    expect(contactComponents).toHaveLength(contactsData.length);

    // Verify that each contact data is rendered correctly
    contactsData.forEach((contact, index) => {
      expect(getByText(contact.label)).toBeInTheDocument();
      expect(getByText(contact.value)).toBeInTheDocument();
      expect(contactComponents[index].querySelector("a")).toHaveAttribute(
        "href",
        contact.link,
      );
    });
  });
});
