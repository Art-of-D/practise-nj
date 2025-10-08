import type { Metadata } from "next";

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
    <html lang="en">
      <body className="dark:bg-gray-900">{children}</body>
    </html>
  );
}
