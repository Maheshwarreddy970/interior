import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/Navbar";
import { Inter } from 'next/font/google';
import Footer from "@/components/Footer";
import { constructMetadata } from "@/lib/utils";


export const metadata = constructMetadata()

const inter = Inter({style:'normal',subsets:['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ inter.className}
      >
        <NavigationBar></NavigationBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
