"use client";
import { useEffect, useState } from "react";

import { Navigation } from "@/components/Navigation";
import { useThemeStore } from "@/factory/STORE_FACTORY/impls";
import { Posts } from "@/types/PostTypes";

import { AboutSection } from "./_sections/AboutSection";
import { BlogSection } from "./_sections/BlogSection";
import { ContactsSection } from "./_sections/ContactsSection";
import { HomeSection } from "./_sections/HomeSection";
import { PerfilSection } from "./_sections/PerfilSection";
import { ProjectSection } from "./_sections/ProjectsSection";
import { ResumeSection } from "./_sections/ResumeSection";

function PageComponent({ posts }: Posts) {
  const { theme } = useThemeStore();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main
      className={`w-full h-h-fit flex items-center justify-center bg-100 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="w-full h-fit flex flex-col items-center justify-center py-[60px] bg-100 gap-[60px] relative">
        <Navigation isActiveItem={activeSection} />
        <PerfilSection />
        <HomeSection />
        <ProjectSection />
        <AboutSection />
        <ResumeSection />
        <BlogSection posts={posts} />
        <ContactsSection />
      </div>
    </main>
  );
}

export { PageComponent };
