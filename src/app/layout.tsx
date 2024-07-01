import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio Blue",
  description: "Desafio de front-end da Blue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex gap-2">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
