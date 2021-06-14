import React, { useState, useEffect } from 'react';

import RatingsBar from './RatingsBar.jsx';

const StarRatingBars = ({ reviews, recommend, rating }) => {
  // const countReviewsStars = (num) => {
  //   let reviewsStar = reviews.filter( (review) => review.rating === num);
  //   let percents = ((reviewsStar.length / reviews.length) * 100).toFixed(2);
  //   return Math.ceil(percents);
  // };

  // let one = rating()

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);

  // const [recommendations, setRecommendations] = useState(0);

  useEffect(() => {
    setOne(Number(rating[1]));
    setTwo(Number(rating[2]));
    setThree(Number(rating[3]));
    setFour(Number(rating[4]));
    setFive(Number(rating[5]));
  }, [rating]);

  // console.log(rating);
  // useEffect(() => {
  //   setOne(countReviewsStars(1));
  //   setTwo(countReviewsStars(2));
  //   setThree(countReviewsStars(3));
  //   setFour(countReviewsStars(4));
  //   setFive(countReviewsStars(5));

  //   var rec = reviews.reduce((acc, val) => {
  //     if (val.recommend) {
  //       return acc += 1;
  //     }
  //     return acc;
  //   }, 0);
  //   // let res = (rec / reviews.length);
  //   // console.log(rec);
  //   setRecommendations(rec);
  // }, [reviews]);

  return (
    <div>
      {`${recommend} recommended this product.`}
      <RatingsBar value = {1} rating = {one} /> {Number(rating) ? rating : 0 }
      <RatingsBar value = {2} rating = {two} /> {two}
      <RatingsBar value = {3} rating = {three} /> {three}
      <RatingsBar value = {4} rating = {four} /> {four}
      <RatingsBar value = {5} rating = {five} /> {five}
    </div>
  );
};

export default StarRatingBars;