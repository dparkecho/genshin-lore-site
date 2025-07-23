import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 text-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Genshin Lore Archives</h1>
      <p className="text-lg mb-4">Story Quests, Theories, and Builds by Fans</p>

      <Link
        href="/Build"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View Builds Test →
      </Link>
    </main>
  );
}
