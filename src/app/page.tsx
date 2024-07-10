/* eslint-disable @next/next/no-async-client-component */
"use server";

import { getPosts } from "@/services/notionService";

import { PageComponent } from "./_pageComponent";

export default async function Home() {
  const posts = await getPosts();
  return <PageComponent posts={posts} />;
}
