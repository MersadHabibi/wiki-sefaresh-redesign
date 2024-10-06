/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createExperience($input: createExperienceInput) {\n    createExperience(input: $input) {\n      id\n    }\n  }\n": types.CreateExperienceDocument,
    "\n  mutation createStore($input: createStoreInput) {\n    createStore(input: $input) {\n      id\n    }\n  }\n": types.CreateStoreDocument,
    "\n  query Experiences(\n    $page: Int\n    $pageSize: Int\n    $search: String\n    $sort: EXPERIENCES_SORTS\n    $storeId: ID\n  ) {\n    experiences(\n      page: $page\n      pageSize: $pageSize\n      search: $search\n      sort: $sort\n      storeId: $storeId\n    ) {\n      pageInfo {\n        currentPage\n        pageSize\n        totalPages\n      }\n      data {\n        id\n        title\n        body\n        createdAt\n        score\n        storeId\n        Store {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.ExperiencesDocument,
    "\n  query AllStores(\n    $page: Int\n    $pageSize: Int\n    $search: String\n    $sort: STORES_SORTS\n  ) {\n    stores(page: $page, pageSize: $pageSize, search: $search, sort: $sort) {\n      pageInfo {\n        currentPage\n        pageSize\n        totalPages\n      }\n      data {\n        id\n        name\n        activityField\n        experiencesCount\n        website\n        score\n      }\n    }\n  }\n": types.AllStoresDocument,
    "\n  query ExperienceById($experienceId: ID!) {\n    experience(id: $experienceId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      product\n      orderDate\n      Store {\n        id\n        name\n      }\n    }\n  }\n": types.ExperienceByIdDocument,
    "\n  query LastExperiences {\n    lastExperiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n": types.LastExperiencesDocument,
    "\n  query LastExperiencesByStore($storeId: ID!) {\n    lastExperiencesByStore(id: $storeId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n": types.LastExperiencesByStoreDocument,
    "\n  query PopularStores {\n    popularStores {\n      id\n      name\n    }\n  }\n": types.PopularStoresDocument,
    "\n  query StoreById($storeId: ID!) {\n    store(id: $storeId) {\n      id\n      website\n      telegram\n      score\n      name\n      instagram\n      experiencesCount\n      activityField\n    }\n  }\n": types.StoreByIdDocument,
    "\n  query StoreNameAndIdByStoreId($id: ID!) {\n    store(id: $id) {\n      id\n      name\n    }\n  }\n": types.StoreNameAndIdByStoreIdDocument,
    "\n  query StoresNameAndId($search: String) {\n    stores(search: $search) {\n      data {\n        id\n        name\n      }\n    }\n  }\n": types.StoresNameAndIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createExperience($input: createExperienceInput) {\n    createExperience(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createExperience($input: createExperienceInput) {\n    createExperience(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createStore($input: createStoreInput) {\n    createStore(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createStore($input: createStoreInput) {\n    createStore(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Experiences(\n    $page: Int\n    $pageSize: Int\n    $search: String\n    $sort: EXPERIENCES_SORTS\n    $storeId: ID\n  ) {\n    experiences(\n      page: $page\n      pageSize: $pageSize\n      search: $search\n      sort: $sort\n      storeId: $storeId\n    ) {\n      pageInfo {\n        currentPage\n        pageSize\n        totalPages\n      }\n      data {\n        id\n        title\n        body\n        createdAt\n        score\n        storeId\n        Store {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Experiences(\n    $page: Int\n    $pageSize: Int\n    $search: String\n    $sort: EXPERIENCES_SORTS\n    $storeId: ID\n  ) {\n    experiences(\n      page: $page\n      pageSize: $pageSize\n      search: $search\n      sort: $sort\n      storeId: $storeId\n    ) {\n      pageInfo {\n        currentPage\n        pageSize\n        totalPages\n      }\n      data {\n        id\n        title\n        body\n        createdAt\n        score\n        storeId\n        Store {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllStores(\n    $page: Int\n    $pageSize: Int\n    $search: String\n    $sort: STORES_SORTS\n  ) {\n    stores(page: $page, pageSize: $pageSize, search: $search, sort: $sort) {\n      pageInfo {\n        currentPage\n        pageSize\n        totalPages\n      }\n      data {\n        id\n        name\n        activityField\n        experiencesCount\n        website\n        score\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllStores(\n    $page: Int\n    $pageSize: Int\n    $search: String\n    $sort: STORES_SORTS\n  ) {\n    stores(page: $page, pageSize: $pageSize, search: $search, sort: $sort) {\n      pageInfo {\n        currentPage\n        pageSize\n        totalPages\n      }\n      data {\n        id\n        name\n        activityField\n        experiencesCount\n        website\n        score\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ExperienceById($experienceId: ID!) {\n    experience(id: $experienceId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      product\n      orderDate\n      Store {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query ExperienceById($experienceId: ID!) {\n    experience(id: $experienceId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      product\n      orderDate\n      Store {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query LastExperiences {\n    lastExperiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query LastExperiences {\n    lastExperiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query LastExperiencesByStore($storeId: ID!) {\n    lastExperiencesByStore(id: $storeId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query LastExperiencesByStore($storeId: ID!) {\n    lastExperiencesByStore(id: $storeId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PopularStores {\n    popularStores {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query PopularStores {\n    popularStores {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query StoreById($storeId: ID!) {\n    store(id: $storeId) {\n      id\n      website\n      telegram\n      score\n      name\n      instagram\n      experiencesCount\n      activityField\n    }\n  }\n"): (typeof documents)["\n  query StoreById($storeId: ID!) {\n    store(id: $storeId) {\n      id\n      website\n      telegram\n      score\n      name\n      instagram\n      experiencesCount\n      activityField\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query StoreNameAndIdByStoreId($id: ID!) {\n    store(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query StoreNameAndIdByStoreId($id: ID!) {\n    store(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query StoresNameAndId($search: String) {\n    stores(search: $search) {\n      data {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query StoresNameAndId($search: String) {\n    stores(search: $search) {\n      data {\n        id\n        name\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;