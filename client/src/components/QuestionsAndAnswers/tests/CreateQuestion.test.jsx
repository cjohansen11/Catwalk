import React from 'react';
import CreateQuestion from '../CreateQuestion.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import GET from '../../../../../lib/related.js';

it('check if button renders', () => {
  const { queryByTitle } = render(<CreateQuestion />);
  const btn = queryByTitle("questionButton");
  expect(btn).toBeTruthy();
});

// describe("click button works", () => {
//   it("onClick", () => {
//     const { queryByTitle } = render(<CreateQuestion />);
//     const btn = queryByTitle("questionButton");

//   })
// })