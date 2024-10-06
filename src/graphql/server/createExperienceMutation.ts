import { GraphQLError } from "graphql";

import { PrismaClient } from "@prisma/client";
import { TGraphQLContext } from "@/types";

type createExperienceInput = {
  title: string;
  body: string;
  product: string;
  orderDate: Date;
  score: number;
  storeId: string;
};

export default async function createExperienceMutation(
  _: any,
  {
    input,
  }: {
    input: createExperienceInput;
  },
  ctx: TGraphQLContext,
) {
  try {
    const experience = await ctx.prisma?.experience.create({
      data: {
        ...input,
      },
    });

    // Update experiencesCount and score
    const store = await ctx.prisma?.store.findUnique({
      where: {
        id: experience?.storeId,
      },
    });

    await ctx.prisma?.store.update({
      where: {
        id: store?.id,
      },
      data: {
        experiencesCount: (store?.experiencesCount ?? 0) + 1,
        score: ((store?.score ?? 5) + (experience?.score ?? 5)) / 2,
      },
    });

    return experience;
  } catch (error) {
    throw new GraphQLError(
      "ثبت تجربه با مشکل مواجه شد! لطفا بعدا امتحان کنید",
      { extensions: { code: 500 } },
    );
  }
}
