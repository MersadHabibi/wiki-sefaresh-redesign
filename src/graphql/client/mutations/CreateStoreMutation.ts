import { gql } from "@/__generated__";

const CREATE_STORE = gql(/* GraphQL */ `
  mutation createStore($input: createStoreInput) {
    createStore(input: $input) {
      id
    }
  }
`);

export default CREATE_STORE;
