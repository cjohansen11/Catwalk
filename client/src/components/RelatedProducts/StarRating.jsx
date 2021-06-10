import React from 'react';

import CardStyles from '../../styles/productCard.css';
import '../../styles/starRating.css';

const StarRating = ({ ratings }) => {

  console.log('ratings', ratings);

  let divStyle = {
    color: 'yellow'
  };

  /* ** THIS NEEDS WORK ** */
  let totalScore;
  let totalVotes;
  let rating;

  for (let key in ratings) {
    let score = Number(key);
    let votes = Number(ratings[key]);
    totalScore = (totalScore || 0) + (votes * score);
    totalVotes = (totalVotes || 0) + votes;
  }

  rating = (totalScore / totalVotes).toFixed(2);

  console.log(rating);

  // if (Object.keys(product.reviews.ratings).length) {
  //   rating = ((Number(product.reviews.ratings['1']) * 1) + (Number(product.reviews.ratings['2']) * 2) + (Number(product.reviews.ratings['3']) * 3) + (Number(product.reviews.ratings['4']) * 4) + (Number(product.reviews.ratings['5']) * 5)) / (Number(product.reviews.ratings['1']) + Number(product.reviews.ratings['2']) + Number(product.reviews.ratings['3']) + Number(product.reviews.ratings['4']) + Number(product.reviews.ratings['5']));
  // } else {
  //   rating = 'Not enough ratings';
  // }

  return (
    <div className={`${'productRating'} ${'star'}`} >
      <div className={'dark-star'}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div className={'rating-star'}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

export default StarRating;