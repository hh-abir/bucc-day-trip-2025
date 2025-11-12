import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Poppins } from "next/font/google"; // Import Poppins
import localFont from 'next/font/local';
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-poppins",
});

const platform = localFont({
  src: '../public/fonts/platform-bold/Platform-Bold.woff2',
  variable: '--font-platform-bold',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://looperbaire.vercel.app/"), // Set the deployment URL
  title: "BUCC Presents লুপের বাইরে",
  description: "Join BRAC University Computer Club for an unforgettable day-long trip filled with fun, networking, and adventure!",
  openGraph: {
    title: "BUCC Presents লুপের বাইরে",
    description: "Join BRAC University Computer Club for an unforgettable day-long trip filled with fun, networking, and adventure!",
    url: "https://looperbaire.vercel.app/", // Placeholder, replace with actual deployment URL
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
    title: "BUCC Presents লুপের বাইরে",
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
      </head>
      <body
        className={`${geistSans.variable} ${platform.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
};
