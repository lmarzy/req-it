import styled from 'styled-components';

export const StyledLink = styled.a`
  display: inline-block;
  color: #7a7a8c;
  text-decoration: none;
  transition: background 800ms ease-in;
  -webkit-background-clip: text;

  &:hover,
  &:focus {
    color: transparent;
    background-image: linear-gradient(to right, #ffbf71, #ff8500);
  }
`;
