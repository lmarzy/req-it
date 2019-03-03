import * as React from 'react';
import { PageHeader } from '../../common';
import { ExDetails } from '../../containers';
import { RouteComponentProps } from 'react-router';

type ExperienceDetailsProps = RouteComponentProps<{ id: string }>;

export const ExperienceDetails: React.FunctionComponent<ExperienceDetailsProps> = props => {
  const id = props.match.params.id;
  return <ExDetails exId={id} />;
};
