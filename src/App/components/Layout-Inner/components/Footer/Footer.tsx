import * as React from 'react';
import { StyledFooter } from './styled';
import { Container } from '../../../../../components';
import { SocialLinks } from '../../../../../components';

export const Footer = () => (
  <StyledFooter>
    <Container>
      <SocialLinks />
    </Container>
  </StyledFooter>
);
