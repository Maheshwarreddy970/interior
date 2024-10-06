import "./globals.css";
import NavigationBar from "@/components/Navbar";
import { PT_Sans } from 'next/font/google';
import Footer from "@/components/Footer";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata()

const inter = PT_Sans({ style: 'normal', subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={` bg-[#FFFAF1] ${inter.className}`}
      >
        <NavigationBar></NavigationBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
