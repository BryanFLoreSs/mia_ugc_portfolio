import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Mia | UGC Creator & Social Media Manager",
  description: "UGC creator and social media manager in the Philippines creating short-form video content that connects brands with real people.",
  openGraph: { title: "Mia | UGC Creator & Social Media Manager", description: "Authentic, relatable short-form content from the Philippines.", type: "website" },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
