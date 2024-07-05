"use client";

import { useState } from "react";

import { BlogCard } from "@/components/BlogCard";
import { Input } from "@/components/Input";
import { useThemeStore } from "@/factory/STORE_FACTORY/impls";

export default function Blog() {
  const [valueForFilterPosts, setValueForFilterPosts] = useState<string>("");

  const { theme } = useThemeStore();
  return (
    <div className={`w-full h-screen ${theme === "dark" ? "dark" : ""}`}>
      <main className="bg-100 w-full h-screen flex flex-col items-center py-14">
        <div className="flex flex-col sm:p-5 md:p-10 lg:p-[60px] sm:w-full md:w-[664px] lg:w-[960px] h-fit bg-300 md:rounded-[14px] lg:rounded-[14px] sm:gap-5 md:gap-10 lg:gap-10 relative">
          <Input
            placeholder="Pesquise por um Post"
            value={valueForFilterPosts}
            onChange={(e) => setValueForFilterPosts(e.target.value)}
          />
          <BlogCard icons={["javascript"]} link="" tags={[]} title="asd" />
        </div>
      </main>
    </div>
  );
}
