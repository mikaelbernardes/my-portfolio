import { act, renderHook } from "@testing-library/react";

import { Post } from "@/types/PostTypes";

import { useLanguageStore } from "../factory/STORE_FACTORY/impls";
import { useFilterPosts } from "./useFilterPosts";

jest.mock("../factory/STORE_FACTORY/impls");

const postsMock: Post[] = [
  {
    id: "1",
    titleInEnglish: "Test Post 1",
    titleInPortuguese: "Teste Post 1",
    slug: "test-post-1",
    tags: ["test", "blog"],
    createdAt: "2023-01-01",
    isABlog: true,
    cardImages: ["image1.jpg"],
  },
  {
    id: "2",
    titleInEnglish: "Another Post",
    titleInPortuguese: "Outro Post",
    slug: "another-post",
    tags: ["another", "blog"],
    createdAt: "2023-01-02",
    isABlog: true,
    cardImages: ["image2.jpg"],
  },
  {
    id: "3",
    titleInEnglish: "Not a Blog",
    titleInPortuguese: "Não é um Blog",
    slug: "not-a-blog",
    tags: ["not", "blog"],
    createdAt: "2023-01-03",
    isABlog: false,
    cardImages: ["image3.jpg"],
  },
];

describe("useFilterPosts", () => {
  beforeEach(() => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "en",
    });
  });

  it("should initialize valueForFilterPosts with an empty string", () => {
    const { result } = renderHook(() => useFilterPosts({ posts: postsMock }));
    expect(result.current.valueForFilterPosts).toBe("");
  });

  it("should filter posts only by blogs", () => {
    const { result } = renderHook(() => useFilterPosts({ posts: postsMock }));
    expect(result.current.postFilteredByLanguage.length).toBe(2);
  });

  it("should filter posts by search value in English", () => {
    const { result } = renderHook(() => useFilterPosts({ posts: postsMock }));

    act(() => {
      result.current.setValueForFilterPosts("test");
    });

    expect(result.current.postFilteredByLanguage.length).toBe(1);
    expect(result.current.postFilteredByLanguage[0].titleInEnglish).toBe(
      "Test Post 1",
    );
  });

  it("should filter posts by search value in Portuguese", () => {
    (useLanguageStore as unknown as jest.Mock).mockReturnValue({
      language: "pt-BR",
    });

    const { result } = renderHook(() => useFilterPosts({ posts: postsMock }));

    act(() => {
      result.current.setValueForFilterPosts("teste");
    });

    expect(result.current.postFilteredByLanguage.length).toBe(1);
    expect(result.current.postFilteredByLanguage[0].titleInPortuguese).toBe(
      "Teste Post 1",
    );
  });

  it("should update search value", () => {
    const { result } = renderHook(() => useFilterPosts({ posts: postsMock }));

    act(() => {
      result.current.setValueForFilterPosts("search term");
    });

    expect(result.current.valueForFilterPosts).toBe("search term");
  });
});
