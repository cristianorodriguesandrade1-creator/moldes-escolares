import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moldes Escolares | 5000+ Moldes para Atividades Escolares",
  description:
    "Portal com moldes escolares para todas as atividades: Festa Junina, Natal, Páscoa, Artes, Educação Infantil e muito mais!",
  keywords: [
    "moldes escolares",
    "atividades escolares",
    "festa junina",
    "moldes de papel",
    "educação infantil",
  ],
  authors: [{ name: "Moldes Escolares" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://moldescolares.com",
    title: "Moldes Escolares | 5000+ Moldes para Atividades Escolares",
    description:
      "Portal com moldes escolares para todas as atividades: Festa Junina, Natal, Páscoa, Artes, Educação Infantil e muito mais!",
    images: [
      {
        url: "https://moldescolares.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moldes Escolares",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://moldescolares.com" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
