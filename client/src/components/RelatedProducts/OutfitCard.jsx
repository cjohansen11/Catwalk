import React, { useState, useEffect } from 'react';

/* ** IMPORT COMPONENT(s) ** */
import StarRating from './StarRating.jsx';
import '../../styles/productCard.css';

const OutfitCard = ({ product, removeOutfit }) => {

  /* ** COMPONENT VARIABLE(s) ** */
  product = product.product;
  let ratings = product.reviews.ratings;
  let defaultStyle;
  let DisplayPrice;

  /* ** ADDTIONAL FUNCTION(s) ** */
  product.styles.results.forEach(style => {
    style['default?'] ? defaultStyle = style : null;
    defaultStyle = defaultStyle || product.styles.results[0];
  });

  defaultStyle.sale_price ? DisplayPrice = <><h5 className={'sale-price'}>{defaultStyle.sale_price}</h5><h5 className={'default-price'}>{defaultStyle.original_price}</h5></> : DisplayPrice = <h5 className={'default-price'}>{defaultStyle.original_price}</h5>;

  return (
    <div className={`${'productCard'} ${'outfit-card'}`}>
      <img className={'image'} src={product.styles.results[0].photos[0].thumbnail_url} alt="" className="previewImage"></img>
      <h5 className={'productName'}>{product.details.name}</h5>
      <h5 className={'productCategory'}>{product.details.category}</h5>
      <StarRating ratings={ratings} />
      {defaultStyle.sale_price ? <span className={'productPrice'}><h5 className={'sale-price'}>{defaultStyle.sale_price}</h5><h5 className={'default-price'}>{defaultStyle.original_price}</h5></span> : <span className={'productPrice'}><h5>{defaultStyle.original_price}</h5></span>}      <div className={'actionButton'}
        onClick={() => removeOutfit(product.details.id)}>✘</div>
    </div>
  );
};

export default OutfitCard;