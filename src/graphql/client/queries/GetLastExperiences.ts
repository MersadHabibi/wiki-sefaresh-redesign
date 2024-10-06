import { gql } from "@/__generated__";

const GET_LAST_EXPERIENCES = gql(/* GraphQL */ `
  query LastExperiences {
    lastExperiences {
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

export default GET_LAST_EXPERIENCES;
