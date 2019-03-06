import * as React from 'react';
import { IconLink } from '../../../../components';
import { StyledSocialLinks } from './styled';

const links = [
  {
    name: 'Github',
    url: 'https://github.com/lmarzy',
  },
  {
    name: 'Linkedin',
    url: 'http://www.linkedin.com/pub/lee-marsden/1b/278/980',
  },
  {
    name: 'Blog',
    url: 'http://openbracket.co.uk',
  },
];

export const SocialLinks = () => (
  <StyledSocialLinks>
    {links.map(link => (
      <li key={link.name}>
        <span>{link.name}</span>
        <IconLink url={link.url} name={link.name.toLowerCase()} />
      </li>
    ))}
  </StyledSocialLinks>
);
