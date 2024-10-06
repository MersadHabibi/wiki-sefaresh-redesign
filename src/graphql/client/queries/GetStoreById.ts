import { gql } from "@/__generated__";

const GET_STORE_BY_ID = gql(/* GraphQL */ `
  query StoreById($storeId: ID!) {
    store(id: $storeId) {
      id
      website
      telegram
      score
      name
      instagram
      experiencesCount
      activityField
    }
  }
`);

export default GET_STORE_BY_ID;
