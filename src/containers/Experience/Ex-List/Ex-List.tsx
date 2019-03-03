import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { StyledExperienceList } from './styled';
import { ListItem } from './List-Item/List-Item';

import { ExperienceListModel } from '../experience.model';

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

export const ExList = () => (
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
          {experiences.map((ex: ExperienceListModel) => (
            <ListItem key={ex.id} ex={ex} />
          ))}
        </StyledExperienceList>
      );
    }}
  </Query>
);
