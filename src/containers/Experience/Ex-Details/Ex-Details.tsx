import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { StyledLayout } from './styled';
import { Overview } from './Overview/Overview';
import { Content } from './Content/Content';

const EXPERIENCE_DETAILS_QUERY = gql`
  query ex($id: ID!) {
    experience(where: { id: $id }) {
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

interface ExperienceInformationProps {
  exId: string;
}

export const ExDetails: React.FunctionComponent<ExperienceInformationProps> = ({ exId }) => (
  <Query query={EXPERIENCE_DETAILS_QUERY} variables={{ id: exId }}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }
      if (error) {
        return `Error! ${error.message}`;
      }

      const { experience } = data;
      const { company, from, to, position, content, tech, tools, backend } = experience;

      return (
        <>
          <Overview company={company} from={from} to={to} position={position} />
          <Content content={content} tech={tech} tools={tools} backend={backend} />
        </>
      );
    }}
  </Query>
);
