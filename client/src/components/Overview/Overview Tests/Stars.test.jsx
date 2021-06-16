import React from 'react';
import SingleStarRating from '../SingleStarRating.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';

describe('Star Ratings', () => {

  const sampleRatings = {
    "1": "12",
    "2": "7",
    "3": "13",
    "4": "10",
    "5": "32"
  };





  it('should have a div called ratingContainer', () => {
    render(<SingleStarRating ratings={sampleRatings} ></SingleStarRating>);
    const ratingDiv = document.getElementsByClassName('ratingContainer');
    expect(ratingDiv).toBeTruthy();
  });

  it('should have a div called seeAll', () => {
    render(<SingleStarRating ratings={sampleRatings} ></SingleStarRating>);
    const seeAllDiv = document.getElementsByClassName('seeAll');
    expect(seeAllDiv).toBeTruthy();
  });

  it('should render a dynamic element See All 74 Reviews', () => {
    render(<SingleStarRating ratings={sampleRatings}> </SingleStarRating>);
    expect(screen.queryByText('See All 74 Reviews')).toBeTruthy();

  });
});