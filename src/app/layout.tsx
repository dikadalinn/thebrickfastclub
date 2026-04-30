import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Martian_Mono } from "next/font/google";
import "./globals.css";
import AgentationWrapper from "@/components/AgentationWrapper";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Brickfast Club — Architecture & Interior Design",
  description: "Jakarta-based interior design and architecture studio founded by Gifari Putranto. Explore our portfolio of minimalist, character-driven spaces.",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* MobileNav is hidden on lg screens and up. It provides the fixed top bar and overlay. */}
        <div className="block lg:hidden">
          <MobileNav />
        </div>

        {/* On mobile, pt-[56px] offsets the fixed MobileNav header. On desktop (lg:), no top padding. */}
        <div className="flex-1 flex flex-col pt-[56px] lg:pt-0">
          {children}
        </div>

        <AgentationWrapper />
      </body>
    </html>
  );
}
