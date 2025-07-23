import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Genshin Lore Archives</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/Story" className="hover:underline">Story</Link>
          <Link href="/Build" className="hover:underline">Builds</Link>
          <Link href="/Theory" className="hover:underline">Theories</Link>
        </div>
      </nav>

      <main className="min-h-screen bg-gray-100 p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Explore the World of Teyvat</h2>
        <p className="text-lg mb-6 text-gray-700">
          Deep dives into quests, characters, and fan theories.
        </p>

        <Link
          href="/Build"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-indigo-600 transition"
        >
          View Builds →
        </Link>
      </main>
    </>
  );
}
