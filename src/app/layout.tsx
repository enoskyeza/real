import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resident Architects Limited",
  description: "Resident Architects Limited, based in Kampala, Uganda, specializes in architecture, interior design, " +
      "landscape design, and project management. Established in 2013, our mission is to deliver top-quality " +
      "architectural designs and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
