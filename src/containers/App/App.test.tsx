import * as React from 'react';
import { render } from 'react-testing-library';

import { App } from './App';

test('App Component renders with toggle switch', () => {
  const { container } = render(<App />);

  // expect(wrap.getByTestId('nav')).toBeTruthy();
});
