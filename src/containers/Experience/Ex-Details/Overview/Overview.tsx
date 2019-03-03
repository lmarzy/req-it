import * as React from 'react';
import { formatImageSrc } from '../../../../utils/format-image-string';
import { StyledOverview, StyledHeader, StyledList } from './styled';

interface OverviewProps {
  company: string;
  from: string;
  to: string;
  position: string;
}

export const Overview: React.FunctionComponent<OverviewProps> = ({ company, from, to, position }) => (
  <StyledOverview>
    <div className="logo">
      <StyledHeader>
        <img src={`/images/${formatImageSrc(company)}.svg`} alt={company} height="45" />
      </StyledHeader>
    </div>
    <div className="from">
      <StyledList>
        <dt>From:</dt>
        <dd>{from}</dd>
      </StyledList>
    </div>
    <div className="to">
      <StyledList>
        <dt>To:</dt>
        <dd>{to}</dd>
      </StyledList>
    </div>
    <div className="position">
      <StyledList>
        <dt>Position:</dt>
        <dd>{position}</dd>
      </StyledList>
    </div>
  </StyledOverview>
);
