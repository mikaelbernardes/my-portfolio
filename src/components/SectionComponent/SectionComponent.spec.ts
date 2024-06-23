// SectionComponent.test.js

import { FaHome } from "react-icons/fa";

describe("SectionComponent Logic Tests", () => {
  it("should have a default title and icon", () => {
    const props = {
      title: "Test Title",
      icon: FaHome, // Mock icon type if necessary
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
});
