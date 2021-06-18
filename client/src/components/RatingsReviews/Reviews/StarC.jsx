import React from 'react';
import PropTypes from 'prop-types';

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

StarC.propTypes = {
  index: PropTypes.number,
  rating: PropTypes.number,
  hoverRating: PropTypes.number,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onSaveRating: PropTypes.func,
};

export default StarC;