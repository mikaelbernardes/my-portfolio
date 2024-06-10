import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageState {
  language: "pt-BR" | "en";
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en",
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === "en" ? "pt-BR" : "en",
        })),
    }),
    {
      name: "language",
    },
  ),
);
