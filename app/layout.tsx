import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Next Meals App",
  description: "Super cool meals. Check it out!",
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
      <body className="dark:bg-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
