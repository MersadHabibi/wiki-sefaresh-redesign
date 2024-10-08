import Hero from "@/components/templates/Hero";
import LastExperiences from "@/components/templates/LastExperiences";
import PopularStores from "@/components/templates/PopularStores";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PopularStores />
      <LastExperiences />
    </main>
  );
}
