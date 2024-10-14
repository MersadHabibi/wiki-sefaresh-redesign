import BackgroundShapes from "@/components/templates/BackgroundShapes";
import Hero from "@/components/templates/hero/Hero";
import LastExperiences from "@/components/templates/LastExperiences";
import LastStores from "@/components/templates/LastStores";
import PopularStores from "@/components/templates/PopularStores";

export default function Home() {
  return (
    <main className="relative z-[10] overflow-x-hidden">
      <Hero />
      <PopularStores />
      <LastExperiences />
      <LastStores />
      <BackgroundShapes />
    </main>
  );
}
