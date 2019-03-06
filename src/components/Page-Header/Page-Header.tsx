import * as React from 'react';
import { StyledPageheader } from './styled';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title }) => (
  <StyledPageheader>
    <h2>{title}</h2>
  </StyledPageheader>
);
