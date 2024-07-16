'use client'
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      {/*<Footer />*/}
      <ScrollToTop />
    </>
  );
}
