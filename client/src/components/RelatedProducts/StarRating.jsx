import React from 'react';

// import CardStyles from '../../styles/productCard.css';
import '../../styles/starRating.css';

const StarRating = ({ ratings }) => {

  /* ** CHECKS FOR RATINGS ** */
  if (!Object.keys(ratings).length) {
    return (
      <></>
    );
  }

  /* ** CALCULATES RATINGS PERCENTAGE ** */
  let totalScore;
  let totalVotes;
  let percentage;

  for (let key in ratings) {
    let score = Number(key);
    let votes = Number(ratings[key]);
    totalScore = (totalScore || 0) + (votes * score);
    totalVotes = (totalVotes || 0) + votes;
  }

  percentage = ((totalScore / totalVotes).toFixed(2) / 5) * 100;

  /* ** STYLE TO BE ADDED WITH PERCENTAGE AMOUNT ** */
  let divStyle = {
    background: `-webkit-linear-gradient(left, gold ${percentage}%, #333 ${percentage}%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };


  return (
    <div className={`${'productRating'} ${'star'}`} >
      <div className={'dark-star'}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div className={'rating-star'} style={divStyle}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

export default StarRating;