'use client'
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
