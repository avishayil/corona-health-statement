import React from 'react';
import { render } from '@testing-library/react';
import CleanSignatureButton from '../CleanSignatureButton';

test('Expect CleanSignatureForm to be rendered', () => {
  const uiElement = render(<CleanSignatureButton />);
  expect(uiElement).toMatchSnapshot();
});