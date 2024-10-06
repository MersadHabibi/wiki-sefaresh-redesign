import { gql } from "@/__generated__";

const GET_LAST_EXPERIENCES_BY_STORE = gql(/* GraphQL */ `
  query LastExperiencesByStore($storeId: ID!) {
    lastExperiencesByStore(id: $storeId) {
      id
      title
      body
      createdAt
      score
      storeId
      Store {
        id
        name
      }
    }
  }
`);

export default GET_LAST_EXPERIENCES_BY_STORE;
