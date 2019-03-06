import * as React from 'react';

import { StyledExperienceList } from './styled';
import { Company } from './Company/Company';

import { ExperienceListModel } from '../../experience.model';

interface CompaniesProps {
  companies: [ExperienceListModel];
}

export const Companies: React.FunctionComponent<CompaniesProps> = ({ companies }) => (
  <StyledExperienceList>
    {companies.map((company: ExperienceListModel) => (
      <Company key={company.id} company={company} />
    ))}
  </StyledExperienceList>
);
