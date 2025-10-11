import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Main page</h1>
      <nav className="flex items-center justify-between p-2">
        <Link href="/community">Community</Link>
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share Meal</Link>
      </nav>
    </main>
  );
}
