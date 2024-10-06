import { graphQLFetch } from "@/lib/utils";
import { Metadata } from "next";
import StoreExperiences from "./_components/StoreExperiences";
import StoreSection from "./_components/StoreSection";

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata> {
  const res: {
    name: string;
    activityField: string;
  } = await graphQLFetch(
    process.env.NEXT_PUBLIC_BACKEND_URL || "",
    /* GraphQL */ `
      query StoreById($storeId: ID!) {
        store(id: $storeId) {
          name
          activityField
        }
      }
    `,
    {
      storeId: params.id,
    },
  );

  return {
    title: res?.name,
    description: res?.activityField,
  };
}

export default function StorePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:pb-20 lg:pt-10">
      <div className="container">
        <StoreSection storeId={params.id} />
        <StoreExperiences storeId={params.id} />
      </div>
    </main>
  );
}
