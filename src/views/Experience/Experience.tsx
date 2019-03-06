import * as React from 'react';
import { Query } from 'react-apollo';

import { COMPANIES_QUERY } from './experience.query';

import { PageHeader } from '../../components';
import { Companies } from './components/Companies/Companies';

export const Experience = () => (
  <Query query={COMPANIES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      const { companies } = data;

      return (
        <>
          <PageHeader title="Experience" />
          <Companies companies={companies} />
        </>
      );
    }}
  </Query>
);
