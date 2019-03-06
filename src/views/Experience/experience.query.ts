import gql from 'graphql-tag';

export const COMPANIES_QUERY = gql`
  {
    companies {
      id
      company
      from
      to
      position
    }
  }
`;
