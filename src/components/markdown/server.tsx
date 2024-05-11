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

const CoverImage = () => {
  return (
    <div className="flex items-center py-4">
      <img
        className="w-full h-[450px]"
        src="https://images.unsplash.com/photo-1714423616168-e9a6f38b6806?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Avatar"
      />
    </div>
  );
};

export default async function MarkdownRenderer({
  slug,
}: MarkdownRendererProps) {
  const markdownTextFormat = await getFile(slug);
  const { html: content, metadata } = await getHtmlFromMarkdownData(markdownTextFormat);

  const { title, description, date, imageUrl } = metadata;

  if (!content) {
    return <MarkdownNotFound slug={slug} />
  }

  return (
    <div>
      <div className="my-10">
        <div className="py-2">
          {title ? (<h1>{title}</h1>) : (<h1>Untitled</h1>)}
          {date && (<p className="text-slate-400"><b>Published on:</b> {formatDate(date)}</p>)}
          {!!imageUrl && (
            <CoverImage />
          )}
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
