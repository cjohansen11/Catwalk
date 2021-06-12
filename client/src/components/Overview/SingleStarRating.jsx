import React from 'react';

import CardStyles from '../../styles/productCard.css';
import '../../styles/rightsidecontainer.css';

const SingleStarRating = ({ ratings }) => {

  if (!Object.keys(ratings).length) {
    return (
      <></>
    );
  }

  /* ** THIS NEEDS WORK ** */
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

  let divStyle = {
    background: `-webkit-linear-gradient(left, gold ${percentage}%, #333 ${percentage}%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };


  return (
    <div className={`${'productRating'} ${'star'}`} >
      <a href='#plus-sign'>See All {Object.keys(ratings).length} Reviews</a>
      <div className={'dark-star'}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div className={'rating-star'} style={divStyle}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

export default SingleStarRating;