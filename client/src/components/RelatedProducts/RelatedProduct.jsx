import React, { useState, useEffect } from 'react';

/* ** IMPORT TEST DATA ** */
import dummy from '../../../../dummy_data/related_product.js';

/* ** IMPORT CHILD COMPONENT ** */
import ProductCard from './ProductCard.jsx';

/* ** IMPORT STYLESHEET ** */
import RelatedStyles from '../../styles/relatedProducts.css';

const RelatedProduct = () => {
  /* ** STATE FOR DUMMY_DATA ** */
  const [featuredProduct, setFeaturedProduct] = useState(dummy.mainProduct); // Object
  const [relatedProducts, setRelatedProducts] = useState(dummy.related); // Array
  // dummy[dummy.related[2]] -- Product data for product from relatedProduct list

  return (
    <div>
      {console.log(dummy[dummy.related[2]])}
      <h2 className={RelatedStyles.h2}> Welcome to the Related Products section</h2>
      <ProductCard />
      <h2>Welcome to the Your Outfit section</h2>
      <ProductCard />
    </div>
  );
};

export default RelatedProduct;