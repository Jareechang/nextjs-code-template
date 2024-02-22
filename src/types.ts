export interface EntryMetaData {
  slug: string;
  title: string;
  description: string;
}

export interface MarkdownResponseData {
  html: string;
  metadata: { [key: string]: string };
}
