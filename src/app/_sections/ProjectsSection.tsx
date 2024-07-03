import Link from "next/link";
import { IoIosGitNetwork } from "react-icons/io";

import { BlogCard } from "@/components/BlogCard";
import { SectionComponent } from "@/components/SectionComponent";
import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";

function ProjectSection() {
  const { language } = useLanguageStore();
  return (
    <SectionComponent
      id="projects"
      icon={IoIosGitNetwork}
      title={language === "en" ? "Projects" : "Projetos"}
    >
      <div className="w-full h-fit flex flex-wrap justify-center gap-[60px]">
        {Array.from({ length: 4 }).map((item, index) => (
          <BlogCard
            key={index}
            icons={["javascript", "nodejs", "react"]}
            tags={["javascript"]}
            title="Title tal"
            link=""
          />
        ))}
        <Link
          href={""}
          className="w-1/2 bg-Primary rounded-md hover:brightness-110 transition-all text-TXT100Dark py-2 flex items-center justify-center"
        >
          {language === "en" ? "See All Projects" : "Ver Todos os Projetos"}
        </Link>
      </div>
    </SectionComponent>
  );
}

export { ProjectSection };
