import { Footer } from "@/components/layouts/Footer";
import { Faq } from "@/components/pages/home/Faq";
import { Navbar } from "@/components/layouts/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Faq />
      <Footer />
    </>
  );
}
