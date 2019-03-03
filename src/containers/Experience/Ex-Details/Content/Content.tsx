import * as React from 'react';
import Markdown from 'markdown-to-jsx';

interface ContentProps {
  content: string;
  tech: string;
}

export const Content: React.FunctionComponent<ContentProps> = ({ content, tech }) => (
  <>
    <Markdown>{content}</Markdown>
    <h3>Tech</h3>
    <p>{tech}</p>
  </>
);
