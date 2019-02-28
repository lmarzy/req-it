import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { StyledExperienceList } from './styled';

const EXPERIENCE_QUERY = gql`
  {
    experiences {
      id
      company
      from
      to
      position
    }
  }
`;

const formatImageSrc = (str: string) => {
  const formattedString = str.replace(/\s+/g, '-').toLowerCase();
  return formattedString;
};

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
        <StyledExperienceList>
          {experiences.map((ex: any) => (
            <li key={ex.id}>
              <article>
                <header>
                  <img src={`/images/${formatImageSrc(ex.company)}.svg`} alt={ex.company} width="25" height="25" />
                  <h3>{ex.company}</h3>
                  <p>
                    {ex.from} - {ex.to}
                  </p>
                </header>
                <p>{ex.position}</p>
              </article>
            </li>
          ))}
        </StyledExperienceList>
      );
    }}
  </Query>
);
