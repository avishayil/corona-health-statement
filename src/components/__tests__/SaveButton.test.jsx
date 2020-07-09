import React from 'react';
import { render } from '@testing-library/react';
import SaveButton from '../SaveButton';

test('Expect SaveButton to be rendered', () => {
  const uiElement = render(<SaveButton />);
  expect(uiElement).toMatchSnapshot();
});