import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { EntryMetaData, MarkdownResponseData } from '@/types';
import { BTY_CODE_API_TOKEN, BTY_CODE_API_ENDPOINT } from '@/constants';

const rootDir = process.cwd();
const MARKDOWN_LOCATION = `${rootDir}/src/entries`;

export const getMarkdownEntryLocation = (): string => {
  return MARKDOWN_LOCATION;
}

export const getAllEntries = async(): Promise<string[]> => {
  let files: string[] = [];
  try {
    files = await fs.readdir(getMarkdownEntryLocation());
  } catch (err) {
    console.error('Error reading folder:', err);
  }

  return files;
}

/**
 *
 * Get file metadata based on the file path
 *
 * */
const getFileMetadata = async(file: string) => {
  return {
    file,
    content: await getFile(file),
  };
}

export const getAllEntriesWithMetadata = async(): Promise<EntryMetaData[]> => {
  let fileWithMetadata: EntryMetaData[] = [];
  try {
    const files = await fs.readdir(getMarkdownEntryLocation());
    const markdownFilesOnly = files.filter(file => file.match(/^\w.*\.md/));
    const fileContents = await Promise.all(markdownFilesOnly.map(getFileMetadata));

    fileWithMetadata = fileContents.map(({ file, content }) => {
      const { title, description } = matter(content)?.data;
      return {
        slug: file.replace(/.md/g, ''),
        title,
        description,
      } as EntryMetaData;
    });

  } catch (err) {
    console.error('getAllEntriesWithMetadata: ', err);
  }

  return fileWithMetadata;
}

export const getFile = async(slug: string): Promise<string> => {
  let file;
  try {
    const filename = !!slug.match('.md') ? slug : `${slug}.md`;
    file = await fs.readFile(`${MARKDOWN_LOCATION}/${filename}`);
  } catch (err) {
    console.log('error: ', err);
  }

  return file?.toString() ?? '';
}

const API_ENDPOINT: string = `${BTY_CODE_API_ENDPOINT}/api/markdown` ?? '';

export const getHtmlFromMarkdownData = async(
  markdownContent: string
): Promise<MarkdownResponseData> => {
  if (!markdownContent) {
    return { html: '', metadata: {} };
  }

  const result = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${BTY_CODE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: markdownContent,
    }),
    cache: 'no-store',
  });

  const resultJson = await result.json();
  return resultJson;
}
