import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArIES Winter Game Dev Jam",
  description:
    "Winter Game Development Assignment by ArIES, IIT Roorkee. Learn, build, and ship real games.",

  openGraph: {
    title: "ArIES Winter Game Dev Jam",
    description: "Build games. Learn systems. Ship something real.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ArIES Winter Game Dev Jam",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ArIES Winter Game Dev Jam",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
