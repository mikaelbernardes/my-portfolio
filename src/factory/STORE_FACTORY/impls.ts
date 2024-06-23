import { IEntity, PersistedStoreFactory } from "./abstract";

interface ThemeState extends IEntity {
  theme: "light" | "dark";
}

export const useThemeStore = PersistedStoreFactory.createStore<ThemeState>({
  name: "theme",
  initialState: { theme: "dark" },
  toggleFunction: (state) => ({
    theme: state.theme === "light" ? "dark" : "light",
  }),
});

interface LanguageState extends IEntity {
  language: "pt-BR" | "en";
}

export const useLanguageStore =
  PersistedStoreFactory.createStore<LanguageState>({
    name: "language",
    initialState: { language: "en" },
    toggleFunction: (state) => ({
      language: state.language === "en" ? "pt-BR" : "en",
    }),
  });
