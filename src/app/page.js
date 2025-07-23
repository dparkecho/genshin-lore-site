import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Genshin Lore</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/story" className="hover:text-purple-300">Story</Link>
          <Link href="/builds" className="hover:text-purple-300">Builds</Link>
          <Link href="/theory" className="hover:text-purple-300">Theories</Link>
        </div>
      </nav>

      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          YOUR MAIN TITLE
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md">
          Your placeholder subtitle or description goes here. This can be 2–3 lines long.
        </p>
        <Link
          href="/story"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded shadow transition"
        >
          Unveil the Lore
        </Link>
      </section>
    </>
  );
}