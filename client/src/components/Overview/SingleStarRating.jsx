import React from 'react';

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
    backgroundImage: `-webkit-linear-gradient(left, gold ${percentage}%, #333 ${percentage}%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };


  return (
    <div className='ratingContainer'>

      <div className={`${'productRating'} ${'starr'}`} >
        <div className={'dark-starr'}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className={'rating-starr'} style={divStyle}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      </div>
      <div className='seeAll'>
        <a href='#route'>See All {totalVotes} Reviews</a>
      </div>
    </div>
  );
};

export default SingleStarRating;



