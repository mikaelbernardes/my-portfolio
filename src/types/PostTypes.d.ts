export type Post = {
  id: string;
  titleInEnglish: string;
  titleInPortuguese: string;
  slug: string;
  tags: string[];
  createdAt: string;
  isABlog: boolean;
  cardImages: string[];
};

export interface Posts {
  posts: Post[];
}
