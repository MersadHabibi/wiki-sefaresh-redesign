import Hero from "@/components/templates/hero/Hero";
import LastExperiences from "@/components/templates/LastExperiences";
import LastStores from "@/components/templates/LastStores";
import PopularStores from "@/components/templates/PopularStores";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PopularStores />
      <LastExperiences />
      <LastStores />
    </main>
  );
}
