import React, { useState, useEffect } from 'react';

/* ** IMPORT CHILD COMPONENT(s) ** */
import PreviewImage from './PreviewImage.jsx';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <PreviewImage />
      <h4 className="productName">product.name</h4>
      <h5 className="productCategory">product.category</h5>
      <h5 className="productRating">Rating: ****</h5>
      <h5 className="productPrice">product.price</h5>
    </div>
  );
};

export default ProductCard;