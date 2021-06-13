import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './stars.css';

const StarRating = ({ numberOfStars }) => {
  const full = '*';
  const empty = '0';
  const partial = '0.5';

  var num = numberOfStars % 2 ? numberOfStars : Math.floor(numberOfStars);
  var decimal = Math.floor(numberOfStars % 1 * 10);

  const a = (value, num, decimal) => {
    // useMemo hook could be used
    if (value <= num && decimal === 0) {
      return full;
    } else if (value === num && decimal > 0) {
      return partial;
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
              onClick = { () => {
              } }
            >
              { a(value, num, decimal) }
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