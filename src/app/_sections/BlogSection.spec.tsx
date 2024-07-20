import { render, screen } from "@testing-library/react";

import { useLanguageStore } from "../../factory/STORE_FACTORY/impls";
import { useFilterPosts } from "../../hooks/useFilterPosts";
import { Post } from "../../types/PostTypes";
import { BlogSection } from "./BlogSection";

// Mock the hooks
jest.mock("../../factory/STORE_FACTORY/impls", () => ({
  useLanguageStore: jest.fn(),
}));

jest.mock("../../hooks/useFilterPosts", () => ({
  useFilterPosts: jest.fn(),
}));

const posts: Post[] = [
  {
    id: "1",
    titleInEnglish: "English Title 1",
    titleInPortuguese: "Portuguese Title 1",
    slug: "/post-1",
    cardImages: ["icon1.png"],
    tags: ["tag1"],
    createdAt: "",
    isABlog: false,
  },
  {
    id: "2",
    titleInEnglish: "English Title 2",
    titleInPortuguese: "Portuguese Title 2",
    slug: "/post-2",
    cardImages: ["icon2.png"],
    tags: ["tag2"],
    createdAt: "",
    isABlog: false,
  },
  {
    id: "3",
    titleInEnglish: "English Title 3",
    titleInPortuguese: "Portuguese Title 3",
    slug: "/post-3",
    cardImages: ["icon3.png"],
    tags: ["tag3"],
    createdAt: "",
    isABlog: false,
  },
  {
    id: "4",
    titleInEnglish: "English Title 4",
    titleInPortuguese: "Portuguese Title 4",
    slug: "/post-4",
    cardImages: ["icon4.png"],
    tags: ["tag4"],
    createdAt: "",
    isABlog: false,
  },
  {
    id: "5",
    titleInEnglish: "English Title 5",
    titleInPortuguese: "Portuguese Title 5",
    slug: "/post-5",
    cardImages: ["icon5.png"],
    tags: ["tag5"],
    createdAt: "",
    isABlog: false,
  },
];

describe("BlogSection", () => {
  beforeEach(() => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
    (useFilterPosts as jest.Mock).mockReturnValue({
      postFilteredByLanguage: posts,
    });
  });

  it("renders the BlogSection component with posts", () => {
    render(<BlogSection posts={posts} />);

    // Check if the section title is rendered
    expect(screen.getByText("Blog")).toBeInTheDocument();

    // Check if the posts are rendered
    posts.slice(-4).forEach((post) => {
      expect(screen.getByText(post.titleInEnglish)).toBeInTheDocument();
    });

    // Check if the "See All Posts" link is rendered
    expect(screen.getByText("See All Posts")).toBeInTheDocument();
  });

  it("renders the BlogSection component with posts in Portuguese", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt",
    });
    render(<BlogSection posts={posts} />);

    // Check if the posts are rendered in Portuguese
    posts.slice(-4).forEach((post) => {
      expect(screen.getByText(post.titleInPortuguese)).toBeInTheDocument();
    });

    // Check if the "Ver Todos os Posts" link is rendered
    expect(screen.getByText("Ver Todos os Posts")).toBeInTheDocument();
  });
});
