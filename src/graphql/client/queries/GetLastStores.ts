import { gql } from "@/__generated__";

const GET_LAST_STORES = gql(/* GraphQL */ `
  query LastStores {
    lastStores {
      id
      name
      activityField
      website
      experiencesCount
      score
    }
  }
`);

export default GET_LAST_STORES;
