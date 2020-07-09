import React from 'react';
import { render } from '@testing-library/react';
import Title from '../Title';

test('Expect Title to be rendered', () => {
  const uiElement = render(<Title />);
  expect(uiElement).toMatchSnapshot();
});