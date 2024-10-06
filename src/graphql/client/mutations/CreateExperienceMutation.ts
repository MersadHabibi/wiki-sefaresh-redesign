import { gql } from "@/__generated__";

const CREATE_EXPERIENCE = gql(/* GraphQL */ `
  mutation createExperience($input: createExperienceInput) {
    createExperience(input: $input) {
      id
    }
  }
`);

export default CREATE_EXPERIENCE;
