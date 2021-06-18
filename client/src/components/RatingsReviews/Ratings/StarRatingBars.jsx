import React, { useState, useEffect } from 'react';

import RatingsBar from './RatingsBar.jsx';

const StarRatingBars = ({ recommend, rating }) => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);

  const transformation = (num) => {
    let a = Number(num);
    if (isNaN(a)) {
      return 0;
    }
    return a;
  };

  useEffect(() => {
    setOne(transformation(rating[1]));
    setTwo(transformation(rating[2]));
    setThree(transformation(rating[3]));
    setFour(transformation(rating[4]));
    setFive(transformation(rating[5]));
  }, [rating]);

  //   var rec = reviews.reduce((acc, val) => {
  //     if (val.recommend) {
  //       return acc += 1;
  //     }
  //     return acc;
  //   }, 0);
  //   // let res = (rec / reviews.length);
  //   // console.log(rec);

  return (
    <div className = ''>
      {`${recommend} recommended this product.`}
      <br />
      <br />
      <div className='ratingBars'>
        <RatingsBar value = {1} rating = {one} /> {one}
        <RatingsBar value = {2} rating = {two} /> {two}
        <RatingsBar value = {3} rating = {three} /> {three}
        <RatingsBar value = {4} rating = {four} /> {four}
        <RatingsBar value = {5} rating = {five} /> {five}
      </div>
    </div>
  );
};

export default StarRatingBars;