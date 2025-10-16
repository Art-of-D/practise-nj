import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative h-20">
      <div className="absolute z-0 inset-0 header-wave-clip  bg-amber-500 "></div>
      <header className="relative z-10 flex flex-row justify-between items-center mr-10 ml-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={64} height={64} />
        </Link>
        <nav className="h-20 flex items-center font-[--font-mono]">
          <ul className="flex flex-row space-between gap-3 text-xl font-bold">
            <li className="hover:underline hover:text-rose-900">
              <Link href="/community">Community</Link>
            </li>
            <li className="hover:underline hover:text-rose-900">
              <Link href="/meals">Meals</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
