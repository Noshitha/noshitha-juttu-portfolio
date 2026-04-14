import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noshitha Juttu | AI Systems Portfolio",
  description:
    "Portfolio for Noshitha Juttu, an MS CS student at UMass Amherst focused on AI systems, data engineering, NLP, LLM inference optimization, retrieval systems, and research.",
  keywords: [
    "Noshitha Juttu",
    "AI systems",
    "data engineering",
    "NLP",
    "LLM inference optimization",
    "retrieval systems",
    "UMass Amherst",
  ],
  authors: [{ name: "Noshitha Juttu" }],
  openGraph: {
    title: "Noshitha Juttu | AI Systems Portfolio",
    description:
      "MS CS student at UMass Amherst focused on AI systems, retrieval, NLP, data engineering, and LLM inference optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f7f8f5] text-[#171914]">{children}</body>
    </html>
  );
}
