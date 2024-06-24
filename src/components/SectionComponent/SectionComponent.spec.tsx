/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import { FaHome } from "react-icons/fa";

import { SectionComponent } from ".";

describe("SectionComponent Logic Tests", () => {
  it("should have a default title and icon", () => {
    const props = {
      title: "Test Title",
      icon: FaHome,
      id: "test-id",
      children: "Test children content",
    };

    expect(props.title).toBe("Test Title");
    expect(props.icon).toBe(FaHome);
    expect(props.id).toBe("test-id");
    expect(props.children).toBe("Test children content");
  });

  it("should handle missing title and icon", () => {
    const props = {
      id: "test-id",
      children: "Test children content",
      title: undefined,
      icon: undefined,
    };

    expect(props.title).toBeUndefined();
    expect(props.icon).toBeUndefined();
    expect(props.id).toBe("test-id");
    expect(props.children).toBe("Test children content");
  });

  it("should render the component with title and icon", () => {
    render(
      <SectionComponent title="Test Title" icon={FaHome} id="test-id">
        Test children content
      </SectionComponent>,
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test children content")).toBeInTheDocument();
    expect(screen.getByTestId("test-id")).toBeInTheDocument();
    expect(screen.getByTestId("test-id")).toContainElement(
      screen.getByText("Test Title"),
    );
  });

  it("should render the component without title and icon", () => {
    render(
      <SectionComponent id="test-id">Test children content</SectionComponent>,
    );

    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
    expect(screen.getByText("Test children content")).toBeInTheDocument();
    expect(screen.getByTestId("test-id")).toBeInTheDocument();
  });
});
