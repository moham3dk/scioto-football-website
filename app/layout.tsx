import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scioto Football",
  description:
    "Stay up-to-date with the Dublin Scioto High School Football Team. View schedules, rosters, news, highlights, and support the Irish.",
  keywords: [
    "Dublin Scioto",
    "Scioto Football",
    "High School Football",
    "Ohio Football",
    "Dublin Scioto Irish",
    "Football Schedule",
    "Football Roster",
  ],
  openGraph: {
    title: "Dublin Scioto High School Football",
    description:
      "Explore the latest news, games, and updates from the Dublin Scioto Irish Football Team.",
    url: "https://sciotofootball.com",
    siteName: "Scioto Football",
    type: "website",
    images: [
      {
        url: "https://sciotofootball.com/images/team.jpeg",
        width: 1200,
        height: 630,
        alt: "Dublin Scioto Football Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dublin Scioto High School Football",
    description:
      "Explore the latest news, games, and updates from the Dublin Scioto Irish Football Team.",
    site: "@SciotoFootball",
    images: ["https://sciotofootball.com/images/team.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
