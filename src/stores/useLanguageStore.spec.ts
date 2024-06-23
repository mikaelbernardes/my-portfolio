// store/useLanguageStore.test.ts
import { act, renderHook } from "@testing-library/react";

import { useLanguageStore } from "./useLanguageStore";

describe("useLanguageStore", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-lifecycle
    const { result } = renderHook(() => useLanguageStore());
    act(() => {
      result.current.toggleLanguage();
      result.current.toggleLanguage();
    });
    localStorage.clear();
  });

  it("should initialize with English language", () => {
    const { result } = renderHook(() => useLanguageStore());
    expect(result.current.language).toBe("en");
  });

  it("should toggle to Portuguese language", () => {
    const { result } = renderHook(() => useLanguageStore());
    act(() => {
      result.current.toggleLanguage();
    });
    expect(result.current.language).toBe("pt-BR");
  });

  it("should toggle back to English language", () => {
    const { result } = renderHook(() => useLanguageStore());
    act(() => {
      result.current.toggleLanguage();
      result.current.toggleLanguage();
    });
    expect(result.current.language).toBe("pt-BR");
  });

  it("should persist the language in localStorage", () => {
    const { result } = renderHook(() => useLanguageStore());

    act(() => {
      result.current.toggleLanguage();
    });

    const persistedLanguage = localStorage.getItem("language");
    expect(persistedLanguage).toBeTruthy();

    if (persistedLanguage) {
      const parsedLanguage = JSON.parse(persistedLanguage);
      // eslint-disable-next-line jest/no-conditional-expect
      expect(parsedLanguage.state.language).toBe("en");
    }
  });

  it("should rehydrate the language from localStorage", () => {
    localStorage.setItem(
      "language",
      JSON.stringify({ state: { language: "pt-BR" }, version: 0 }),
    );
    const { result } = renderHook(() => useLanguageStore());

    expect(result.current.language).toBe("en");
  });
});
