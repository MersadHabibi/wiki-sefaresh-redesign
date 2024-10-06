import { ApolloServer } from "@apollo/server";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import fs from "fs";

import {
  DateTimeTypeDefinition,
  PositiveFloatTypeDefinition,
  PositiveIntTypeDefinition,
  URLTypeDefinition,
} from "graphql-scalars";
import { NextRequest } from "next/server";
import path from "path";
import resolvers from "./resolvers";

const typeDefs = fs.readFileSync(
  path.join(path.resolve(), "./src/app/api/graphql/schema.graphql"),
  "utf-8",
);

let plugins = [];
if (process.env.NODE_ENV === "production") {
  plugins = [
    ApolloServerPluginLandingPageProductionDefault({
      embed: true,
      graphRef: "mersad.up@gmail.com",
    }),
  ];
} else {
  plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })];
}

const server = new ApolloServer({
  typeDefs: [
    typeDefs,
    DateTimeTypeDefinition,
    PositiveIntTypeDefinition,
    PositiveFloatTypeDefinition,
    URLTypeDefinition,
  ],
  resolvers: {
    ...resolvers,
    // DateTimeResolver,
    // PositiveFloatResolver,
    // PositiveIntResolver,
    // URLResolver,
  },
  plugins,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => {
    const prisma = new PrismaClient();

    prisma.$connect();

    return {
      req,
      prisma,
    };
  },
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
