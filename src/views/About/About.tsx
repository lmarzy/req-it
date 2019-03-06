import * as React from 'react';
import { StyledAbout } from './styled';

import { PageHeader } from '../../components';

export class About extends React.Component {
  render() {
    return (
      <>
        <PageHeader title="About" />
        <StyledAbout>
          <div>
            <p>Front-end web developer from Nottinghamshire in the UK</p>
          </div>
          <div>
            <p>Img</p>
          </div>
        </StyledAbout>
      </>
    );
  }
}
