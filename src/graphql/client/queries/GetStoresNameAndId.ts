import { gql } from "@/__generated__";

const GET_STORES_NAME_AND_ID = gql(/* GraphQL */ `
  query StoresNameAndId($search: String) {
    stores(search: $search) {
      data {
        id
        name
      }
    }
  }
`);

export default GET_STORES_NAME_AND_ID;
