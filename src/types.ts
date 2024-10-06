import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { NextRequest } from "next/server";

export type TGraphQLContext = {
  req?: NextRequest;
  prisma?: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
};

export type TStore = {
  id: string;
  name: string;
  website: string;
  instagram: string;
  telegram: string;
  activityField: string;
  experiencesCount: number;
  view: number;
  score: number;
};

export type TExperience = {
  id: string;
  title: string;
  body: string;
  score: number;
  product: string;
  orderDate: Date;
  storeId: string;
  createdAt: Date;
};

export type TError = {
  message: string;
  code: number;
};

export type TPageInfo = {
  currentPage?: number | null;
  pageSize?: number | null;
  totalPages?: number | null;
};
