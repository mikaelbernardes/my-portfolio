/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NotionDatabaseResponseProps {
  object: string;
  results: Result[];
  next_cursor?: any;
  has_more: boolean;
  type: string;
  page_or_database: Pageordatabase;
  request_id: string;
}

interface Pageordatabase {}

interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Createdby;
  last_edited_by: Createdby;
  cover?: any;
  icon?: any;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url?: any;
}

interface Properties {
  Tag: Tag;
  Images: Tag;
  TitleInPortuguese: TitleInPortuguese;
  IsBlog: IsBlog;
  Slug: TitleInPortuguese;
  TitleInEnglish: TitleInEnglish;
}

interface TitleInEnglish {
  id: string;
  type: string;
  title: Richtext[];
}

interface IsBlog {
  id: string;
  type: string;
  checkbox: boolean;
}

interface TitleInPortuguese {
  id: string;
  type: string;
  rich_text: Richtext[];
}

interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface Text {
  content: string;
  link?: any;
}

interface Tag {
  id: string;
  type: string;
  multi_select: Multiselect[];
}

interface Multiselect {
  id: string;
  name: string;
  color: string;
}

interface Parent {
  type: string;
  database_id: string;
}

interface Createdby {
  object: string;
  id: string;
}
