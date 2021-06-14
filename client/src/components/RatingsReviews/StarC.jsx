import React from 'react';

import Star from './Star.jsx';

import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

const StarC = ({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating,
}) => {
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return 'yellow';
    } else if (!hoverRating && rating >= index) {
      return 'yellow';
    }
    return null;
  }, [rating, hoverRating, index]);

  return (
    <div

      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}>
      { fill ? <BsStarFill /> : <BsStar />}
      {/* <Star fill={fill} /> */}
    </div>
  );
};

export default StarC;