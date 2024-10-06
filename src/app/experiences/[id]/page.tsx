import { graphQLFetch } from "@/lib/utils";
import { CircleAlertIcon } from "lucide-react";
import { Metadata } from "next";
import Experience from "./_components/Experience";

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata> {
  const res: {
    title: string;
    body: string;
  } = await graphQLFetch(
    process.env.NEXT_PUBLIC_BACKEND_URL || "",
    /* GraphQL */ `
      query ExperienceById($experienceId: ID!) {
        experience(id: $experienceId) {
          title
          body
        }
      }
    `,
    {
      experienceId: params.id,
    },
  );

  return {
    title: res?.title,
    description: res?.body,
  };
}

export default function ExperiencePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:pb-20 lg:pt-10">
      <section className="container">
        <div className="mb-5 flex h-14 w-full items-center gap-x-2 rounded-lg bg-warning/80 px-4 font-medium text-black sm:gap-x-4 sm:px-6 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            این تجربه تنها نظر شخصی یک فرد است و ممکن است دقیق یا معتبر نباشد.
          </p>
        </div>
        <Experience params={params} />
      </section>
    </main>
  );
}
