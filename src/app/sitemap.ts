import { graphQLFetch } from "@/lib/utils";
import type { MetadataRoute } from "next";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const stores: { data: { id: string; createdAt: Date }[] } =
    await graphQLFetch(
      process.env.NEXT_PUBLIC_BACKEND_URL as string,
      /* GraphQL */ `
        query AllStores {
          stores {
            data {
              id
              createdAt
            }
          }
        }
      `,
    );

  const experiences: { data: { id: string; createdAt: Date }[] } =
    await graphQLFetch(
      process.env.NEXT_PUBLIC_BACKEND_URL as string,
      /* GraphQL */ `
        query Experiences {
          experiences {
            data {
              id
              createdAt
            }
          }
        }
      `,
    );

  const storesMap = stores.data.map((store) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/stores/${store.id}`,
    lastModified: store.createdAt,
  }));

  const experiencesMap = experiences.data.map((experience) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/experiences/${experience.id}`,
    lastModified: experience.createdAt,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/stores`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/experiences`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/experiences/new-experience`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/stores/new-store`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/robots.txt`,
      lastModified: new Date(),
    },
    ...storesMap,
    ...experiencesMap,
  ];
}
