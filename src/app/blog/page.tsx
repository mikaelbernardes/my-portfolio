/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable no-empty-pattern */
"use server";

import { getPosts } from "@/services/notionService";

import { BlogPage } from "./blogPage";

export default async function Blog() {
  const posts = await getPosts();

  return <BlogPage posts={posts} />;
}
