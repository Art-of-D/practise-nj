import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center bg-amber-500 rounded-xl">
      <Link href="/" className="ml-3">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </Link>
      <nav className="mr-3 pt-4">
        <ul className="flex flex-row space-between gap-3 font-medium">
          <li className="hover:underline hover:text-rose-900">
            <Link href="/community">Community</Link>
          </li>
          <li className="hover:underline hover:text-rose-900">
            <Link href="/meals">Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
