import type { Metadata } from "next";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Hire El Paso",
  description: "IT Community in El Paso,TX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
