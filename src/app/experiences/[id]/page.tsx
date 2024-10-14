import { graphQLFetch } from "@/lib/utils";
import { AlertOctagonIcon, CircleAlertIcon } from "lucide-react";
import { Metadata } from "next";
import Experience from "./_components/Experience";
import BackgroundShapes from "@/components/templates/BackgroundShapes";
import * as motion from "framer-motion/client";

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
      query ExperienceByIdForMeta($experienceId: ID!) {
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
    <main className="relative z-10 h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:pb-20 lg:pt-10">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container">
        <div className="mb-5 flex h-14 w-full items-center gap-x-2 rounded-lg bg-[#FFCC00] px-4 font-medium text-gray-4 sm:gap-x-4 sm:px-6 md:text-lg">
          <AlertOctagonIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            این تجربه تنها نظر شخصی یک فرد است و ممکن است دقیق یا معتبر نباشد.
          </p>
        </div>
        <Experience params={params} />
      </motion.section>
      <BackgroundShapes />
    </main>
  );
}
