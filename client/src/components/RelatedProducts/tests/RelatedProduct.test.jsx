import React from 'react';
import RelatedProduct from '../RelatedProduct.jsx';
import GET from '../../../../../lib/related.js';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';

it('should display titles for Related Products and Your Outfit', () => {
  render(<RelatedProduct featuredProduct={GET.featuredProduct(19583)} ></RelatedProduct>);
  expect(screen.queryByText('Welcome to the Related Products section')).toBeTruthy();
  expect(screen.queryByText('Welcome to the Your Outfit section')).toBeTruthy();
});

it('should have a div called carousel', () => {
  render(<RelatedProduct featuredProduct={GET.featuredProduct(19583)} ></RelatedProduct>);
  const carouselDiv = document.getElementsByClassName('carousel');
  expect(carouselDiv).toBeTruthy();
});

it('should have a div called outfit-container', () => {
  render(<RelatedProduct featuredProduct={GET.featuredProduct(19583)} ></RelatedProduct>);
  const outfitContainer = document.getElementsByClassName('outfit-container');
  expect(outfitContainer).toBeTruthy();
});