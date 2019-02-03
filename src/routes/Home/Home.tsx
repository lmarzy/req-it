import * as React from 'react';
import { Container, Spacer } from '../../layout';

export const initialState = {
  title: 'Home',
};

export type HomeState = Readonly<typeof initialState>;

export class Home extends React.Component<{}, HomeState> {
  readonly state: HomeState = initialState;

  render() {
    const { title } = this.state;

    return (
      <div className="home">
        <Container>
          <Spacer size={2}>
            <h1>{title}</h1>
          </Spacer>
        </Container>
      </div>
    );
  }
}
