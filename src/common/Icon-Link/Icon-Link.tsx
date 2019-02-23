import * as React from 'react';
import { StyledIcon } from './styled';

interface IconLinkProps {
  url: string;
  name: string;
}

const iconPaths = {
  linkedin:
    'M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z M1 6h3v9h-3v-9z M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z',
  pencil:
    'M6 10l2-1 7-7-1-1-7 7-1 2zM4.52 13.548c-0.494-1.043-1.026-1.574-2.069-2.069l1.548-4.262 2-1.217 6-6h-3l-6 6-3 10 10-3 6-6v-3l-6 6-1.217 2z',
} as { [key: string]: string };

export const IconLink: React.FunctionComponent<IconLinkProps> = ({ url, name }) => (
  <StyledIcon href={url}>
    <svg width="16" height="16" viewBox="0 0 16 16">
      <title>{name}</title>
      <path d={iconPaths[name]} />
    </svg>
  </StyledIcon>
);
