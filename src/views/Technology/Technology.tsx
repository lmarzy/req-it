import * as React from 'react';
import { Query } from 'react-apollo';

import { TECHNOLOGIES_QUERY } from './technology.query';

import { PageHeader } from '../../components';
import { TechnologiesList } from './components/technologies-list/technologies-list';

export const Technology = () => (
  <Query query={TECHNOLOGIES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      const { technologies } = data;

      return (
        <>
          <PageHeader title="Technology" />
          <TechnologiesList technologies={technologies} />
        </>
      );
    }}
  </Query>
);
