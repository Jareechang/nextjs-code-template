import Link from 'next/link'
import { getAllEntries, getAllEntriesWithMetadata, formatDate } from '@/components/markdown/utils';
import { EntryMetaData } from '@/types';

const PreviewEntry = ({
  slug,
  title,
  description,
  date,
}: EntryMetaData) => {
  return (
    <div className="my-8" key={slug}>
      <Link href={`/code/${slug}`} className="text-white">
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      {date && (<p className="text-slate-400">Published: {formatDate(date)}</p>)}
      <div className="flex items-center pt-4">
        <img className="w-7 h-7 rounded-full" src="/avatar.png" alt="Avatar" />
        <div className="ml-3 flex flex-col justify-center align-center">
          <h2 className="text-lg font-bold m-0 p-0">John Doe</h2>
        </div>
      </div>

      <div className="pt-6">
        <Link href={`/code/${slug}`}>
          <span>Read More</span>
        </Link>
      </div>
      <hr className="my-4" />
    </div>
  )
};

const AvailableEntries = async() => {
  const entriesWithMetadata = await getAllEntriesWithMetadata();
  return (
    <section className="py-8">
      {entriesWithMetadata.map((data: EntryMetaData) => (
        <PreviewEntry key={data.slug} {...data} />
      ))}
    </section>
  );
};

export default async function Home() {
  const data = await getAllEntriesWithMetadata();
  return (
    <main className="md:container md:max-w-[900px] mx-auto py-10 flex justify-center">
      <div className="min-h-screen p-10">
        <h1>Recent Posts</h1>
        <div className="flex justify-content">
          <AvailableEntries />
       </div>
     </div>
    </main>
  );
}
