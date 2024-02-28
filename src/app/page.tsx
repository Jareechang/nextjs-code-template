import Link from 'next/link'
import { getAllEntries, getAllEntriesWithMetadata } from '@/components/markdown/utils';
import { EntryMetaData } from '@/types';

const AvailableEntries = async() => {
  const entriesWithMetadata = await getAllEntriesWithMetadata();
  return (
    <section className="py-8">
      {entriesWithMetadata.map((data: EntryMetaData) => (
        <div className="my-8" key={data.slug}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>

          <div className="pt-4">
            <Link href={`/code/${data.slug}`}>
              <span>Read More</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default async function Home() {
  const data = await getAllEntriesWithMetadata();
  return (
    <main className="md:container md:max-w-[1000px] mx-auto py-10">
      <div className="min-h-screen p-10">
        <h1>Check out my posts</h1>
        <hr />
        <div className="flex justify-content">
          <AvailableEntries />
       </div>
     </div>
    </main>
  );
}
