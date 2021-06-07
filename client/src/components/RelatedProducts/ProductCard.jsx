import React, { useState, useEffect } from 'react';

/* ** IMPORT COMPONENT(s) ** */
import StarRating from './StarRating.jsx';
import PreviewImage from './PreviewImage.jsx';
import CardStyles from '../../styles/productCard.css';

const ProductCard = ({ product }) => {
  product = product.product;

  /* ** THIS NEEDS WORK ** */
  let rating;
  if (Object.keys(product.reviews.ratings).length) {
    rating = ((Number(product.reviews.ratings['1']) * 1) + (Number(product.reviews.ratings['2']) * 2) + (Number(product.reviews.ratings['3']) * 3) + (Number(product.reviews.ratings['4']) * 4) + (Number(product.reviews.ratings['5']) * 5)) / (Number(product.reviews.ratings['1']) + Number(product.reviews.ratings['2']) + Number(product.reviews.ratings['3']) + Number(product.reviews.ratings['4']) + Number(product.reviews.ratings['5']));
  } else {
    rating = 'Not enough ratings';
  }

  return (
    <div className={CardStyles.productCard}>
      <img className={CardStyles.image} src={product.styles.results[0].photos[0].thumbnail_url} alt="" className="previewImage"></img>
      <h5 className={CardStyles.productName}>{product.details.name}</h5>
      <h5 className={CardStyles.productCategory}>{product.details.category}</h5>
      <StarRating />
      {/* <h5 className={CardStyles.productRating}>*****</h5> */}
      <h5 className={CardStyles.productPrice}>{product.details.default_price}</h5>
    </div>
  );
};

export default ProductCard;

