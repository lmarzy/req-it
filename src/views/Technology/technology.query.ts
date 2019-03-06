import gql from 'graphql-tag';

export const TECHNOLOGIES_QUERY = gql`
  {
    technologies {
      id
      technology
    }
  }
`;
