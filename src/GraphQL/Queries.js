import {gql} from '@apollo/client';

export const INITIAL_QUERY = gql`
  query {
    characters(page: 1) {
      info {
        count
        pages
      }
      results {
        image
        name,
        id
        gender
        species
        episode{episode}
      }
    }
  }
`