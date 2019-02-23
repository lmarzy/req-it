import * as React from 'react';
import { IconLink } from '../../../../common';
import { StyledSocialLinks } from './styled';

export const SocialLinks = () => (
  <StyledSocialLinks>
    <li>
      <span>Linkedin</span>
      <IconLink url="http://www.linkedin.com/pub/lee-marsden/1b/278/980" name="linkedin" />
    </li>
    <li>
      <span>Blog</span>
      <IconLink url="http://openbracket.co.uk" name="pencil" />
    </li>
  </StyledSocialLinks>
);
