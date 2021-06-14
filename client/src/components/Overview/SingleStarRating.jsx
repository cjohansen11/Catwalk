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
    <div className='ratingContainer'>
      <a className='seeAll' href='#route'>See All {Object.keys(ratings).length} Reviews</a>
      <div className={`${'productRating'} ${'starr'}`} >
        <div className={'dark-starr'}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className={'rating-starr'} style={divStyle}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      </div>
      <div className='socialButtons'>
        <a href='https://www.facebook.com/'className='fB'>FB</a>
        <a href='https://instagram.com/'className='iG'>IG</a>
        <a href='https://twitter.com/'className='tW'>Twitter</a>
      </div>
    </div>
  );
};

export default SingleStarRating;