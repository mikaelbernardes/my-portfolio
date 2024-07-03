"use client";

import { Navigation } from "@/components/Navigation";
import { useThemeStore } from "@/factory/STORE_FACTORY/impls";

import { AboutSection } from "./_sections/AboutSection";
import { BlogSection } from "./_sections/BlogSection";
import { ContactsSection } from "./_sections/ContactsSection";
import { HomeSection } from "./_sections/HomeSection";
import { PerfilSection } from "./_sections/PerfilSection";
import { ProjectSection } from "./_sections/ProjectsSection";
import { ResumeSection } from "./_sections/ResumeSection";

export default function Home() {
  const { theme } = useThemeStore();

  return (
    <main
      className={`w-full h-h-fit flex items-center justify-center bg-100 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="w-full h-fit flex flex-col items-center justify-center py-[60px] bg-100 gap-[60px] relative">
        <Navigation />
        <PerfilSection />
        <HomeSection />
        <ProjectSection />
        <AboutSection />
        <ResumeSection />
        <BlogSection />
        <ContactsSection />
      </div>
    </main>
  );
}
