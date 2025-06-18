import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    title: "Dublin Scioto High School Football | Official Website",
    description:
      "Explore the latest news, games, and updates from the Dublin Scioto Irish Football Team.",
    url: "https://sciotofootball.com",
    siteName: "Scioto Football",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dublin Scioto High School Football | Official Website",
    description:
      "Explore the latest news, games, and updates from the Dublin Scioto Irish Football Team.",
    site: "@SciotoFootball",
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
