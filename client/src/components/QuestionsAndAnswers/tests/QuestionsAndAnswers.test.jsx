import React from 'react';
import QuestionsAndAnswers from '../QuestionsAndAnswers.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import GET from '../../../../../lib/related.js';

it('should display title for Questions And Answers', () => {
  render(<QuestionsAndAnswers featuredProduct={GET.featuredProduct(19583)} ></QuestionsAndAnswers>);
  expect(screen.queryByText('Questions & Answers')).toBeTruthy();
});