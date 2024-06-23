import { act, renderHook } from "@testing-library/react";

import { useThemeStore } from "./useThemeStore";

describe("useThemeStore", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-lifecycle
    const { result } = renderHook(() => useThemeStore());
    act(() => {
      result.current.toggleTheme();
      result.current.toggleTheme();
    });
  });

  it("should initialize with dark theme", () => {
    const { result } = renderHook(() => useThemeStore());
    expect(result.current.theme).toBe("dark");
  });

  it("should toggle to light theme", () => {
    const { result } = renderHook(() => useThemeStore());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe("light");
  });

  it("should toggle back to dark theme", () => {
    const { result } = renderHook(() => useThemeStore());
    act(() => {
      result.current.toggleTheme();
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe("light");
  });

  it("should persist the theme in localStorage", () => {
    const { result } = renderHook(() => useThemeStore());

    act(() => {
      result.current.toggleTheme();
    });

    const persistedTheme = localStorage.getItem("theme");
    expect(persistedTheme).toBeTruthy();

    if (persistedTheme) {
      const parsedTheme = JSON.parse(persistedTheme);
      // eslint-disable-next-line jest/no-conditional-expect
      expect(parsedTheme.state.theme).toBe("dark");
    }
  });

  it("should rehydrate the theme from localStorage", () => {
    localStorage.setItem(
      "theme",
      JSON.stringify({ state: { theme: "light" }, version: 0 }),
    );
    const { result } = renderHook(() => useThemeStore());

    expect(result.current.theme).toBe("dark");
  });
});
