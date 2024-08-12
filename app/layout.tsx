import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const playpenSans = Playpen_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milly Liu - Full Stack Developer",
  description:
    "Self-taught frontend developer proficient in HTML, CSS, and JavaScript. Specialized in React, Tailwind CSS, MUI, and TypeScript. Passionate about creating responsive and dynamic user interfaces with a keen eye for design and functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playpenSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
