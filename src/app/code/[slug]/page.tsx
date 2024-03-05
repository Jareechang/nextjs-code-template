import Link from 'next/link'
import MarkdownInit from '@/components/markdown/client';
import MarkdownRenderer from '@/components/markdown/server';

interface PageProps {
  params: {
    slug: string;
  }
}

const BackSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const BackButton = ({ href }: { href: string; }) => (
  <Link href={href}>
    <span className="flex justify-flex-start">
      <BackSvg /><span className="">Back</span>
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
