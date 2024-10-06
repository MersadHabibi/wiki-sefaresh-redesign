import { gql } from "@/__generated__";

const GET_STORE_NAME_AND_ID_BY_STORE_ID = gql(/* GraphQL */ `
  query StoreNameAndIdByStoreId($id: ID!) {
    store(id: $id) {
      id
      name
    }
  }
`);

export default GET_STORE_NAME_AND_ID_BY_STORE_ID;
