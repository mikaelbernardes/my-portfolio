import { PersistedStoreFactory, StoreConfig } from "./abstract";

interface ThemeState {
  theme: "light" | "dark";
}

interface LanguageState {
  language: "pt-BR" | "en";
}

describe("PersistedStoreFactory", () => {
  it("should create a theme store and toggle theme", () => {
    const themeConfig: StoreConfig<ThemeState> = {
      name: "theme",
      initialState: { theme: "dark" },
      toggleFunction: (state) => ({
        theme: state.theme === "light" ? "dark" : "light",
      }),
    };

    const useThemeStore = PersistedStoreFactory.createStore(themeConfig);
    const themeStore = useThemeStore.getState();

    expect(themeStore.theme).toBe("dark");

    themeStore.toggle();
    expect(useThemeStore.getState().theme).toBe("light");

    themeStore.toggle();
    expect(useThemeStore.getState().theme).toBe("dark");
  });

  it("should create a language store and toggle language", () => {
    const languageConfig: StoreConfig<LanguageState> = {
      name: "language",
      initialState: { language: "en" },
      toggleFunction: (state) => ({
        language: state.language === "en" ? "pt-BR" : "en",
      }),
    };

    const useLanguageStore = PersistedStoreFactory.createStore(languageConfig);
    const languageStore = useLanguageStore.getState();

    expect(languageStore.language).toBe("en");

    languageStore.toggle();
    expect(useLanguageStore.getState().language).toBe("pt-BR");

    languageStore.toggle();
    expect(useLanguageStore.getState().language).toBe("en");
  });

  it("should have a persist object", () => {
    const store = PersistedStoreFactory.createStore({
      name: "test",
      initialState: { key: "value" },
      toggleFunction: function (): Partial<{ key: string }> {
        throw new Error("Function not implemented.");
      },
    });
    expect(store.persist).toBeDefined();
  });

  it("should return true for hasHydrated after hydration", () => {
    const store = PersistedStoreFactory.createStore({
      name: "test",
      initialState: { key: "value" },
      toggleFunction: function (): Partial<{ key: string }> {
        throw new Error("Function not implemented.");
      },
    });
    expect(store.persist.hasHydrated()).toBe(true);
  });

  it("should call set with the correct state when toggle is called", () => {
    const themeConfig: StoreConfig<ThemeState> = {
      name: "theme",
      initialState: { theme: "dark" },
      toggleFunction: (state) => ({
        theme: state.theme === "light" ? "dark" : "light",
      }),
    };

    const useThemeStore = PersistedStoreFactory.createStore(themeConfig);
    const themeStore = useThemeStore.getState();

    const setSpy = jest.spyOn(themeStore, "toggle");

    themeStore.toggle();
    expect(setSpy).toHaveBeenCalled();
    expect(useThemeStore.getState().theme).toBe("light");

    themeStore.toggle();
    expect(setSpy).toHaveBeenCalledTimes(2);
    expect(useThemeStore.getState().theme).toBe("dark");
  });
});
