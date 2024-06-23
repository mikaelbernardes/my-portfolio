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
});
