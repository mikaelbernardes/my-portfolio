"use client";
import { BlogCard } from "@/components/BlogCard";
import { Input } from "@/components/Input";
import { useLanguageStore, useThemeStore } from "@/factory/STORE_FACTORY/impls";
import { useFilterPosts } from "@/hooks/useFilterPosts";
import { Posts } from "@/types/PostTypes";

function BlogPage({ posts }: Posts) {
  const { theme } = useThemeStore();
  const { language } = useLanguageStore();
  const {
    postFilteredByLanguage,
    setValueForFilterPosts,
    valueForFilterPosts,
  } = useFilterPosts({ posts });
  return (
    <div className={`w-full h-screen ${theme === "dark" ? "dark" : ""}`}>
      <main className="bg-100 w-full h-screen flex flex-col items-center py-14">
        <div className="flex flex-col sm:p-5 md:p-10 lg:p-[60px] sm:w-full md:w-[664px] lg:w-[960px] h-fit bg-300 md:rounded-[14px] lg:rounded-[14px] sm:gap-5 md:gap-10 lg:gap-10 relative">
          <Input
            placeholder="Pesquise por um Post"
            value={valueForFilterPosts}
            onChange={(e) => setValueForFilterPosts(e.target.value)}
          />
          <div className="w-full h-fit flex flex-wrap lg:gap-x-[60px] lg:gap-y-10">
            {postFilteredByLanguage.map((post) => (
              <BlogCard
                key={post.id}
                icons={post.cardImages}
                link={post.slug}
                tags={post.tags}
                title={
                  language === "en"
                    ? post.titleInEnglish
                    : post.titleInPortuguese
                }
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export { BlogPage };
