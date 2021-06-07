import React, { useState, useEffect } from 'react';

/* ** IMPORT CHILD COMPONENT(s) ** */
import PreviewImage from './PreviewImage.jsx';

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
    <div className="productCard">
      <img src={product.styles.results[0].photos[0].thumbnail_url} alt="" className="previewImage"></img>
      <h4 className="productName">{product.details.name}</h4>
      <h5 className="productCategory">{product.details.category}</h5>
      <h5 className="productRating">{rating}</h5>
      <h5 className="productPrice">{product.details.default_price}</h5>
    </div>
  );
};

export default ProductCard;