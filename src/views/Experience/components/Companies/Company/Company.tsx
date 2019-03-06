import * as React from 'react';
import { StyledListItem, StyledArticle, StyledHeader, StyledBody } from './styled';
import { Link } from 'react-router-dom';
import { formatImageSrc } from '../../../../../utils/format-image-string';
import { ExperienceListModel } from '../../../experience.model';

interface CompanyProps {
  company: ExperienceListModel;
}

export const Company: React.FunctionComponent<CompanyProps> = ({ company }) => (
  <StyledListItem>
    <StyledArticle>
      <Link to={`/experience/${company.id}`}>
        <StyledHeader>
          <h3>{company.company}</h3>
          <img src={`/images/${formatImageSrc(company.company)}.svg`} alt={company.company} height="30" />
        </StyledHeader>
        <StyledBody>
          <p>{company.position}</p>
          <p>
            {company.from} - {company.to}
          </p>
        </StyledBody>
      </Link>
    </StyledArticle>
  </StyledListItem>
);
