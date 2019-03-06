import * as React from 'react';
import { Query } from 'react-apollo';

import { TECHNOLOGIES_QUERY } from './technology.query';
import { TechnologiesModel } from './technology.model';

import { PageHeader } from '../../components';

export const Technology = () => (
  <Query query={TECHNOLOGIES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      const { technologies } = data;

      return (
        <>
          <PageHeader title="Experience" />
          <ul>
            {technologies.map((tech: TechnologiesModel) => (
              <li key={tech.id}>{tech.technology}</li>
            ))}
          </ul>
        </>
      );
    }}
  </Query>
);
