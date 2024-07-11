/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPost } from "@/services/notionService";

import { SlugPage } from "./_slugPage";

interface PropsSlug {
  params: {
    slug: string;
  };
}

export default async function Blog({ params }: PropsSlug) {
  const post = await getPost(params.slug);

  return <SlugPage post={post} />;
}
