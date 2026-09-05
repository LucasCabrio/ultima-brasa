import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Última Brasa",
  description: "Um RPG de ação e exploração. Reacenda os faróis do vale e enfrente o Rei Oco.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
