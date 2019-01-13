import { breakpoints } from '../settings/breakpoints';

interface BpProps {
  type?: string;
  bpValue: number;
  css: string;
}

export const bp = ({ type = 'min', bpValue, css }: BpProps) => `
  @media (${type}-width: ${breakpoints[bpValue]}) {
    ${css}
  }
`;
