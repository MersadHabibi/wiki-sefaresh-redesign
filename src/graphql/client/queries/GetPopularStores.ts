import { gql } from "@/__generated__";

const GET_POPULAR_STORES = gql(/* GraphQL */ `
  query PopularStores {
    popularStores {
      id
      name
    }
  }
`);

export default GET_POPULAR_STORES;
