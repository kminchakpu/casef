import type { Metadata } from "next";
import { Play, Open_Sans, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CASEF | Empowering Communities, Transforming Lives",
  description:
    "CASEF is a non-profit organization dedicated to empowering communities and transforming lives through education, healthcare, and sustainable development initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${play.variable} ${openSans.variable} ${roboto.variable}`}
    >
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}