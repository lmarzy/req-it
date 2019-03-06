import gql from 'graphql-tag';

export const COMPANY_QUERY = gql`
  query company($id: ID!) {
    company(where: { id: $id }) {
      company
      from
      to
      position
      content
      tech
      tools
      backend
    }
  }
`;
