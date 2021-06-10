import React, { useState, useEffect } from 'react';

/* ** IMPORT COMPONENT(s) ** */
import StarRating from './StarRating.jsx';
import '../../styles/productCard.css';

const OutfitCard = ({ product, changeFeaturedProduct, removeOutfit }) => {

  /* ** COMPONENT VARIABLE(s) ** */
  product = product.product;
  let defaultStyle;
  let DisplayPrice;

  /* ** ADDTIONAL FUNCTION(s) ** */
  product.styles.results.forEach(style => {
    style['default?'] ? defaultStyle = style : null;
    defaultStyle = defaultStyle || product.styles.results[0];
  });

  defaultStyle.sale_price ? DisplayPrice = <><h5 className={'sale-price'}>{defaultStyle.sale_price}</h5><h5 className={'default-price'}>{defaultStyle.original_price}</h5></> : DisplayPrice = <h5 className={'default-price'}>{defaultStyle.original_price}</h5>;

  /* ** THIS NEEDS WORK ** */
  // let rating;
  // if (Object.keys(product.reviews.ratings).length) {
  //   rating = ((Number(product.reviews.ratings['1']) * 1) + (Number(product.reviews.ratings['2']) * 2) + (Number(product.reviews.ratings['3']) * 3) + (Number(product.reviews.ratings['4']) * 4) + (Number(product.reviews.ratings['5']) * 5)) / (Number(product.reviews.ratings['1']) + Number(product.reviews.ratings['2']) + Number(product.reviews.ratings['3']) + Number(product.reviews.ratings['4']) + Number(product.reviews.ratings['5']));
  // } else {
  //   rating = 'Not enough ratings';
  // }

  return (
    <div className={`${'productCard'} ${'outfit-card'}`}>
      <img className={'image'} src={product.styles.results[0].photos[0].thumbnail_url} alt="" className="previewImage"></img>
      <h5 className={'productName'}>{product.details.name}</h5>
      <h5 className={'productCategory'}>{product.details.category}</h5>
      {/* <StarRating /> */}
      {defaultStyle.sale_price ? <span className={'productPrice'}><h5 className={'sale-price'}>{defaultStyle.sale_price}</h5><h5 className={'default-price'}>{defaultStyle.original_price}</h5></span> : <span className={'productPrice'}><h5>{defaultStyle.original_price}</h5></span>}      <div className={'actionButton'}
        onClick={() => removeOutfit(product.details.id)}>x</div>
    </div>
  );
};

export default OutfitCard;