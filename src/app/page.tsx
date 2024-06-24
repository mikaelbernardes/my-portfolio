"use client";

import { Navigation } from "@/components/Navigation";
import { useThemeStore } from "@/factory/STORE_FACTORY/impls";

import { PerfilSection } from "./_sections/PerfilSection";

export default function Home() {
  const { theme } = useThemeStore();

  return (
    <main
      className={`w-screen h-screen flex items-center justify-center bg-100 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="w-screen h-screen flex items-center justify-center bg-100">
        <Navigation />
        <PerfilSection />
      </div>
    </main>
  );
}
