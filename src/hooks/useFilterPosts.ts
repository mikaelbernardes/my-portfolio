import { useState } from "react";

import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";
import { Posts } from "@/types/PostTypes";

export function useFilterPosts({ posts }: Posts) {
  const [valueForFilterPosts, setValueForFilterPosts] = useState<string>("");
  const { language } = useLanguageStore();

  const filterOnlyByPosts = posts.filter((post) => post.isABlog === true);

  const postsFilteredBySearchInEnglish = filterOnlyByPosts.filter((post) =>
    post.titleInEnglish
      .toLowerCase()
      .includes(valueForFilterPosts.toLowerCase()),
  );

  const postsFilteredBySearchInPortuguese = filterOnlyByPosts.filter((post) =>
    post.titleInPortuguese
      .toLowerCase()
      .includes(valueForFilterPosts.toLowerCase()),
  );

  const postFilteredByLanguage =
    language === "en"
      ? postsFilteredBySearchInEnglish
      : postsFilteredBySearchInPortuguese;

  return {
    valueForFilterPosts,
    setValueForFilterPosts,
    postFilteredByLanguage,
  };
}
