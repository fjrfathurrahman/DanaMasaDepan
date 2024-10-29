import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
// import { FetchProvider } from "@/lib/hooks/FecthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <FetchProvider>
    <>
      <Navbar />
      {children}
      <Footer />
    </>
    // </FetchProvider>
  );
}
