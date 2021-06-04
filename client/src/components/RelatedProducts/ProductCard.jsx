import React, { useState, useEffect } from 'react';

/* ** IMPORT CHILD COMPONENT(s) ** */
import PreviewImage from './PreviewImage.jsx';

const ProductCard = () => {
  return (
    <div className="productCard">
      <PreviewImage />
      <h4 className="productName">Product Name</h4>
      <h5 className="productCategory">Category</h5>
      <h5 className="productRating">Rating: ****</h5>
      <h5 className="productPrice">Price</h5>
    </div>
  );
};

export default ProductCard;