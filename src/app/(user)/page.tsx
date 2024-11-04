import { Collaboration } from "@/components/pages/home/Collaboration";
import { ContactMapForm } from "@/components/pages/home/ContactMapForm";
import { Hero } from "@/components/pages/home/Hero";
import { Reviews } from "@/components/pages/home/Reviews";
import { StartSaving } from "@/components/pages/home/StartSaving";

export default function Home() {
  return (
    <>
      <Hero />
      <Collaboration />
      {/* Balance Section: Apa saja Keuntunganya */}
      <StartSaving />
      <Reviews />
      <ContactMapForm/>
    </>
  );
}
