import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "First step to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className="dark:bg-gray-900">{children}</body>
    </html>
  );
}
