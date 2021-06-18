import React, { useState, useEffect } from 'react';
import { IoIosStar } from 'react-icons/io';

/* ** IMPORT COMPONENT(s) ** */
import StarRating from './StarRating.jsx';
import '../../styles/productCard.css';

const ProductCard = ({ product, changeFeaturedProduct, setToggleModal, setComparedProduct, setCardCount, isDarkMode }) => {

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
    <div className={`${isDarkMode ? 'productCard-dark' : 'productCard'} ${'product-card-array'}`}
      onClick={() => {
        setCardCount(1);
        changeFeaturedProduct(product.details.id);
      }} role="complementary">
      <div className={'image-container'}><img className={'image'} src={defaultStyle.photos[0].thumbnail_url} alt="" className="previewImage"></img></div>
      <h5 className={'productName'} >{product.details.name.toUpperCase()}</h5>
      <h5 className={'productCategory'}>{product.details.category}</h5>
      <StarRating
        ratings={ratings} />
      {defaultStyle.sale_price ? <div className={'productPrice'}><h5 className={'sale-price'}>{defaultStyle.sale_price}</h5><h5 className={'default-price'}>{defaultStyle.original_price}</h5></div> : <div className={'productPrice'}><h5>{defaultStyle.original_price}</h5></div>}
      <div className={'actionButton'} onClick={(e) => {
        e.stopPropagation();
        setComparedProduct(product);
        setToggleModal(true);
      }} role="button"><IoIosStar /></div>
    </div>
  );
};

export default ProductCard;

