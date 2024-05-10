'use server'

import {
  getFile,
  getMarkdownEntryLocation,
  getHtmlFromMarkdownData,
  formatDate,
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

  const { title, description, date } = metadata;

  if (!content) {
    return <MarkdownNotFound slug={slug} />
  }

  return (
    <div>
      <div className="my-10">
        <div className="py-2">
          {title ? (<h1>{title}</h1>) : (<h1>Untitled</h1>)}
          {date && (<p className="text-slate-400">Published on: {formatDate(date)}</p>)}
          <div className="flex items-center pt-4">
            <img className="w-7 h-7 rounded-full" src="/avatar.png" alt="Avatar" />
            <div className="ml-3 flex flex-col justify-center align-center">
              <h2 className="text-lg font-bold m-0 p-0">John Doe</h2>
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
