"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const path = usePathname();
  return (
    <>
      <Link href={href} className={path.startsWith(href) ? "underline" : ""}>
        {children}
      </Link>
    </>
  );
}
