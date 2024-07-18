import { useLanguageStore, useThemeStore } from "./impls";

describe("useThemeStore", () => {
  it("should initialize with dark theme", () => {
    const state = useThemeStore.getState();
    expect(state.theme).toBe("dark");
  });

  it("should toggle theme", () => {
    useThemeStore.getState().toggle();
    let state = useThemeStore.getState();
    expect(state.theme).toBe("light");

    useThemeStore.getState().toggle();
    state = useThemeStore.getState();
    expect(state.theme).toBe("dark");
  });

  it("should have persist object", () => {
    const store = useThemeStore;
    expect(store.persist).toBeDefined();
  });

  it("should return true for hasHydrated after hydration", () => {
    const store = useThemeStore;
    expect(store.persist.hasHydrated()).toBe(true);
  });

  it("should call toggle function and change theme", () => {
    const { toggle, theme } = useThemeStore.getState();
    expect(theme).toBe("dark");

    toggle();
    expect(useThemeStore.getState().theme).toBe("light");

    toggle();
    expect(useThemeStore.getState().theme).toBe("dark");
  });
});

describe("useLanguageStore", () => {
  it("should initialize with English language", () => {
    const state = useLanguageStore.getState();
    expect(state.language).toBe("en");
  });

  it("should toggle language", () => {
    useLanguageStore.getState().toggle();
    let state = useLanguageStore.getState();
    expect(state.language).toBe("pt-BR");

    useLanguageStore.getState().toggle();
    state = useLanguageStore.getState();
    expect(state.language).toBe("en");
  });

  it("should have persist object", () => {
    const store = useLanguageStore;
    expect(store.persist).toBeDefined();
  });

  it("should return true for hasHydrated after hydration", () => {
    const store = useLanguageStore;
    expect(store.persist.hasHydrated()).toBe(true);
  });

  it("should call toggle function and change language", () => {
    const { toggle, language } = useLanguageStore.getState();
    expect(language).toBe("en");

    toggle();
    expect(useLanguageStore.getState().language).toBe("pt-BR");

    toggle();
    expect(useLanguageStore.getState().language).toBe("en");
  });
});
