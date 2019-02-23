import styled from 'styled-components';
import { colors } from '../../styles/settings';

export const StyledLink = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;
  transition: background 800ms ease-in;
  -webkit-background-clip: text;

  &:hover,
  &:focus {
    color: transparent;
    background-image: linear-gradient(to right, ${colors.red}, ${colors.orange});
  }
`;
