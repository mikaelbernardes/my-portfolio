/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

import { NotionDatabaseResponseProps } from "./notionServiceTypes";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const { DATABASE_ID } = process.env;

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID || "",
  });

  const typedResponse = response as unknown as NotionDatabaseResponseProps;

  return typedResponse.results.map((post) => {
    const titleInEnglish =
      post.properties.TitleInEnglish?.title?.[0]?.text.content || "Untitled";
    const titleInPortuguese =
      post.properties.TitleInPortuguese?.rich_text?.[0].text.content ||
      "Untitled";
    const slug = post.properties.Slug?.rich_text?.[0]?.plain_text || "no-slug";
    const tags =
      post.properties.Tag && post.properties.Tag.multi_select
        ? post.properties.Tag.multi_select.map((tag) => tag.name)
        : [""];
    const isABlog = post.properties.IsBlog.checkbox;
    const cardImages =
      post.properties.Images && post.properties.Images.multi_select
        ? post.properties.Images.multi_select.map((image) => image.name)
        : [""];

    return {
      id: post.id,
      titleInEnglish,
      titleInPortuguese,
      slug,
      tags,
      createdAt: post.created_time,
      isABlog,
      cardImages,
    };
  });
}

export async function getPost(slug: string) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID || "",
    filter: {
      or: [
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const pageId = response.results[0].id;

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const typedResponse = response as unknown as NotionDatabaseResponseProps;

  return {
    titleInEnglish:
      typedResponse.results[0].properties.TitleInEnglish.title[0].plain_text,
    titleInPortuguese:
      typedResponse.results[0].properties.TitleInPortuguese.rich_text[0]
        .plain_text,
    content: mdString.parent,
  };
}
