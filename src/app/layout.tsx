import type { Metadata } from "next";
import { Inter, DM_Serif_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-text",
});

export const metadata: Metadata = {
  title: "Minor Chores - Kickstart Your Neighborhood Business",
  description: "Turn your skills into income. Connect with neighbors who need help with everyday tasks. Start earning today with our simple, secure platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerifText.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
