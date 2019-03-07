import * as React from 'react';
import { TechnologiesModel } from '../../technology.model';

import { StyledTechnologiesList } from './styled';

interface TechnologiesListProps {
  technologies: [TechnologiesModel];
}

export const TechnologiesList: React.FunctionComponent<TechnologiesListProps> = ({ technologies }) => (
  <StyledTechnologiesList>
    {technologies.map((tech: TechnologiesModel) => (
      <li key={tech.id}>{tech.technology}</li>
    ))}
  </StyledTechnologiesList>
);
