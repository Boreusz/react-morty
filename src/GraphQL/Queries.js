import {gql} from '@apollo/client';

export const query = (page = '1', filters = '') => {
  return gql`
    query {
      characters(page: ${page}, filter: {${filters}}) {
        info {
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
}