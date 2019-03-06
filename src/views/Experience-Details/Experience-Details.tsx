import * as React from 'react';
import { Query } from 'react-apollo';

import { COMPANY_QUERY } from './experience-details.query';
import { RouteComponentProps } from 'react-router';

import { Overview } from './components/Overview/Overview';
import { Content } from './components/Content/Content';

type ExperienceDetailsProps = RouteComponentProps<{ id: string }>;

export const ExperienceDetails: React.FunctionComponent<ExperienceDetailsProps> = ({ match }) => (
  <Query query={COMPANY_QUERY} variables={{ id: match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }
      if (error) {
        return `Error! ${error.message}`;
      }

      const { company } = data;

      return (
        <>
          <Overview company={company.company} from={company.from} to={company.to} position={company.position} />
          <Content content={company.content} tech={company.tech} tools={company.tools} backend={company.backend} />
        </>
      );
    }}
  </Query>
);
