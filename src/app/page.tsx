import LandingHeader from "@/components/templates/LandingHeader";
import LastExperiences from "@/components/templates/LastExperiences";
import PopularStores from "@/components/templates/PopularStores";

export default function Home() {
  return (
    <main className="bg-neutral-100 dark:bg-neutral-950">
      <LandingHeader />
      <PopularStores />
      <LastExperiences />
    </main>
  );
}
