import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bucc-day-trip-2025.vercel.app"), // Set the deployment URL
  title: "BUCC Day Long Tour 2025",
  description: "Join BRAC University Computer Club for an unforgettable day-long trip filled with fun, networking, and adventure!",
  openGraph: {
    title: "BUCC Day Long Tour 2025",
    description: "Join BRAC University Computer Club for an unforgettable day-long trip filled with fun, networking, and adventure!",
    url: "https://bucc-day-trip-2025.vercel.app", // Placeholder, replace with actual deployment URL
    siteName: "BUCC Day Long Tour 2025",
    images: [
      {
        url: "/embed.png", // Use the banner image for social media preview
        width: 1200,
        height: 630,
        alt: "BUCC Day Long Tour 2025 Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUCC Day Long Tour 2025",
    description: "Join BRAC University Computer Club for an unforgettable day-long trip filled with fun, networking, and adventure!",
    images: ["/embed.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};
