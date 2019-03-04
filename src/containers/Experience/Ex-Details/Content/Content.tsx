import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import { StyledContent } from './styled';

interface ContentProps {
  content: string;
  tech: string;
  tools: string;
  backend: string;
}

export const Content: React.FunctionComponent<ContentProps> = ({ content, tech, tools, backend }) => (
  <StyledContent>
    <p>
      <Markdown>{content}</Markdown>
    </p>
    <h3>Tech</h3>
    <p>
      <em>{tech}</em>
    </p>
    <h3>Tools</h3>
    <p>
      <em>{tools}</em>
    </p>
    <h3>Backend</h3>
    <p>
      <em>{backend}</em>
    </p>
  </StyledContent>
);
