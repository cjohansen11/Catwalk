import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

import './stars.css';

const StarRating = ({ numberOfStars }) => {
  const full = <BsStarFill />;
  const empty = <BsStar />;
  const partial = <BsStarFill />;

  var decimal = Math.floor(numberOfStars % 1 * 10);
  var num = numberOfStars.toFixed(0);

  const a = (value, num, decimal) => {
    // useMemo hook could be used
    if (value <= num && decimal === 0) {
      return full;
    } else if (value === num && decimal > 0) {
      return full;
    } else {
      return empty;
    }
  };

  return (
    <div className = 'starRow'>
      {
        _.map([1, 2, 3, 4, 5], (value, idx) => {
          return (
            <div
              key = {idx}
            >
              {
                a(value, num, decimal)
              }
            </div>
          );
        })
      }
    </div>
  );
};

StarRating.propTypes = {
  numberOfStars: PropTypes.number.isRequired
};

export default StarRating;