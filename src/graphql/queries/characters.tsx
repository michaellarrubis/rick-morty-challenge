import { gql } from '@apollo/client';

const CHARACTERS_QUERY = gql`
  query characters($page: Int!) {
    characters(page: $page) {
      info {
        next,
      },
      results {
        id,
        name,
        status,
        species,
        image,
        origin {
          name,
          dimension
        }
      }
    }
  }
`;

export { CHARACTERS_QUERY };