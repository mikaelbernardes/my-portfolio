/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import React from "react";
import { FaReact } from "react-icons/fa";

import { BlogCard } from "./index";
import { getIconByName } from "./transformNameInIcon";

// Mocking getIconByName
jest.mock("./transformNameInIcon", () => ({
  getIconByName: jest.fn(),
}));

describe("BlogCard", () => {
  it("should render the title, icons, and tags correctly", () => {
    // Mock the implementation of getIconByName
    (getIconByName as jest.Mock).mockImplementation((name) => {
      if (name === "react") return { icon: FaReact, color: "#61dafb" };
      return null;
    });

    const props = {
      title: "Test Blog Post",
      icons: ["react"],
      tags: ["Tag1", "Tag2"],
      link: "test-blog-post",
    };

    const { getByText, getByRole } = render(<BlogCard {...props} />);

    // Check title
    expect(getByText("Test Blog Post")).toBeInTheDocument();

    // Check tags
    expect(getByText("Tag1")).toBeInTheDocument();
    expect(getByText("Tag2")).toBeInTheDocument();

    // Check link
    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/blog/test-blog-post");
  });

  it("should handle unknown icon names gracefully", () => {
    // Mock the implementation of getIconByName to return null for unknown icons
    (getIconByName as jest.Mock).mockImplementation(() => null);

    const props = {
      title: "Test Blog Post",
      icons: ["unknown"],
      tags: ["Tag1"],
      link: "test-blog-post",
    };

    const { getByText, queryByRole, getByRole } = render(
      <BlogCard {...props} />,
    );

    // Check title
    expect(getByText("Test Blog Post")).toBeInTheDocument();

    // Check that no icon is rendered
    const icon = queryByRole("img");
    expect(icon).toBeNull();

    // Check tags
    expect(getByText("Tag1")).toBeInTheDocument();

    // Check link
    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/blog/test-blog-post");
  });
});
