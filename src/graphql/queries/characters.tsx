import { gql } from '@apollo/client';

const CHARACTERS_QUERY = gql`
  query characters($page: Int!) {
    characters(page: $page) {
      info {
        count,
        pages,
        next,
        prev
      },
      results {
        id,
        name,
        status,
        species,
        type,
        gender,
        image,
        origin {
          name,
          dimension
        },
        location {
          name,
          dimension
        }
      }
    }
  }
`;

export { CHARACTERS_QUERY };