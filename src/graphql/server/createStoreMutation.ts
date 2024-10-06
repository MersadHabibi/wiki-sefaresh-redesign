import { GraphQLError } from "graphql";

import { PrismaClient } from "@prisma/client";
import { TGraphQLContext } from "@/types";

type createStoreInput = {
  name: string;
  website: string;
  telegram: string;
  instagram: string;
  activityField: string;
};

export default async function createStoreMutation(
  _: any,
  {
    input,
  }: {
    input: createStoreInput;
  },
  ctx: TGraphQLContext,
) {
  try {
    const store = await ctx.prisma?.store.create({
      data: {
        ...input,
      },
    });

    return store;
  } catch (error) {
    throw new GraphQLError(
      "ساخت فروشگاه با مشکل مواجه شد! لطفا بعدا امتحان کنید",
      { extensions: { code: 500 } },
    );
  }
}
