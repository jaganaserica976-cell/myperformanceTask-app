
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erica | Personal Website",
  description: "Welcome to Erica's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-pink-50 text-gray-800">
        <nav className="bg-pink-600 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Erica
            </Link>

            <div className="flex gap-6 font-medium">
              <Link href="/" className="hover:text-pink-200">
                Home
              </Link>

              <Link href="/about" className="hover:text-pink-200">
                About
              </Link>

              <Link href="/projects" className="hover:text-pink-200">
                Projects
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="bg-pink-600 text-white text-center py-5 mt-16">
          <p>© 2026 Erica. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
