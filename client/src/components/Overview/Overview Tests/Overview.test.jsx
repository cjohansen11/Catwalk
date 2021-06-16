import React from 'react';
import Overview from '../Overview.jsx';
import GET from '../../../../../lib/related.js';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';


it('should have a div called galleryContainer', () => {
  render(<Overview featuredProduct={19089} ></Overview>);
  const galleryDiv = document.getElementsByClassName('galleryContainer');
  expect(galleryDiv).toBeTruthy();
});

it('should have a div called productContainer', () => {
  render(<Overview featuredProduct={19089} ></Overview>);
  const productDiv = document.getElementsByClassName('productContainer');
  expect(productDiv).toBeTruthy();
});

it('should have a div called infocontainer', () => {
  render(<Overview featuredProduct={19089}> </Overview>);
  const infoDiv = document.getElementsByClassName('infocontainer');
  expect(infoDiv).toBeTruthy();

});