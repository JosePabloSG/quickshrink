import { Navbar } from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quickshrink - Fast & Simple URL Shortener",
  description: "Transform long URLs into short, manageable links with Quickshrink. Free, fast, and secure URL shortening service.",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dull-lavender-50`} suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
