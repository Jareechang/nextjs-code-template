'use server'

import {
  getFile,
  getMarkdownEntryLocation,
  getHtmlFromMarkdownData
} from '@/components/markdown/utils';

interface MarkdownRendererProps {
  slug: string;
}

const MarkdownNotFound = ({ slug }: { slug: string; }): JSX.Element => {
  return (
    <div className="m-4">
      {slug} is not found.
      <div>
       Please add it to {getMarkdownEntryLocation()}
      </div>
    </div>
  );
}

export default async function MarkdownRenderer({
  slug,
}: MarkdownRendererProps) {
  const markdownTextFormat = await getFile(slug);
  const { html: content, metadata } = await getHtmlFromMarkdownData(markdownTextFormat);

  if (!content) {
    return <MarkdownNotFound slug={slug} />
  }

  return (
    <div>
      <div className="my-10">
        <div className="py-2">
          {metadata?.title ? (<h1>{metadata.title}</h1>) : (<h1>Untitled</h1>)}
          {metadata?.description ? (<p>{metadata.description}</p>) : (<p>No description</p>)}
        </div>
        <hr className="my-4" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
