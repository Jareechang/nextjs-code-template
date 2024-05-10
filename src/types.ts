export interface EntryMetaData {
  slug: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
}

export interface MarkdownResponseData {
  html: string;
  metadata: { [key: string]: string };
}
