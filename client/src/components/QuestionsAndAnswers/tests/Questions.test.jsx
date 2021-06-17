import React from 'react';
import Questions from '../Questions.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import GET from '../../../../../lib/related.js';

it('check if more questions button renders', () => {
  const { queryByTitle } = render(<Questions />);
  const btn = queryByTitle("moreQuestionsButton");
  expect(btn).toBeTruthy();
});