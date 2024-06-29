import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

import { BlogCard } from "@/components/BlogCard";
import { SectionComponent } from "@/components/SectionComponent";
import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";

function BlogSection() {
  const { language } = useLanguageStore();
  return (
    <SectionComponent id="blog" icon={FaHouse} title="Blog">
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
          className="w-1/2 bg-Primary rounded-md hover:brightness-125 transition-all text-TXT100Dark py-2 flex items-center justify-center"
        >
          {language === "en" ? "See All Posts" : "Ver Todos os Posts"}
        </Link>
      </div>
    </SectionComponent>
  );
}

export { BlogSection };
