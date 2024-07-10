import Link from "next/link";
import { FaFile } from "react-icons/fa6";

import { BlogCard } from "@/components/BlogCard";
import { SectionComponent } from "@/components/SectionComponent";
import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";
import { useFilterPosts } from "@/hooks/useFilterPosts";
import { Posts } from "@/types/PostTypes";

function BlogSection({ posts }: Posts) {
  const { language } = useLanguageStore();
  const { postFilteredByLanguage } = useFilterPosts({ posts });
  return (
    <SectionComponent id="blog" icon={FaFile} title="Blog">
      <div className="w-full h-fit flex flex-wrap justify-center gap-[60px]">
        {postFilteredByLanguage.slice(-4).map((item) => (
          <BlogCard
            key={item.id}
            icons={item.cardImages}
            tags={item.tags}
            title={
              language === "en" ? item.titleInEnglish : item.titleInPortuguese
            }
            link={item.slug}
          />
        ))}
        <Link
          href="/blog"
          className="w-1/2 bg-Primary rounded-md hover:brightness-110 transition-all text-TXT100Dark py-2 flex items-center justify-center"
        >
          {language === "en" ? "See All Posts" : "Ver Todos os Posts"}
        </Link>
      </div>
    </SectionComponent>
  );
}

export { BlogSection };
