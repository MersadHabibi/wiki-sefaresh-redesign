import { gql } from "@/__generated__";

const GET_EXPERIENCE_BY_ID = gql(/* GraphQL */ `
  query ExperienceById($experienceId: ID!) {
    experience(id: $experienceId) {
      id
      title
      body
      createdAt
      score
      storeId
      product
      orderDate
      Store {
        id
        name
      }
    }
  }
`);

export default GET_EXPERIENCE_BY_ID;
