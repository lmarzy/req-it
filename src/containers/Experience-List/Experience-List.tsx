import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const EXPERIENCE_QUERY = gql`
  {
    experiences {
      id
      title
      details
    }
  }
`;

export const ExperienceList = () => (
  <Query query={EXPERIENCE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }
      if (error) {
        return `Error! ${error.message}`;
      }

      const { experiences } = data;

      return (
        <ul>
          {experiences.map((ex: any) => (
            <li key={ex.id}>
              <span>{ex.title}</span>
              <span>{ex.details}</span>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);
