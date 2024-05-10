import Link from 'next/link'
import MarkdownInit from '@/components/markdown/client';
import MarkdownRenderer from '@/components/markdown/server';
import { ChevronLeftIcon } from '@/components/icons';

interface PageProps {
  params: {
    slug: string;
  }
}

const BackButton = ({ href }: { href: string; }) => (
  <Link href={href}>
    <span className="flex justify-flex-start">
      <ChevronLeftIcon /><span className="">Back</span>
    </span>
  </Link>
);

export default async function Page({ params }: PageProps) {
  const slug: string = params?.slug ?? '';
  return (
    <div id="code-page-container" className="md:container md:max-w-[1000px] mx-auto py-10">
      <div className="min-h-screen p-10">
        <BackButton href="/" />

        {/* Initialize the client JS */}
        <MarkdownInit />

        <MarkdownRenderer slug={slug} />
      </div>
    </div>
  );
}
