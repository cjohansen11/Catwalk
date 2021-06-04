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
  const [relatedProductList, setRelatedProductList] = useState(dummy.relatedProductList); // Array of Objects

  return (
    <div>
      <h2 className={RelatedStyles.h2}> Welcome to the Related Products section</h2>
      {relatedProductList.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
      <h2>Welcome to the Your Outfit section</h2>
      <ProductCard />
    </div>
  );
};

export default RelatedProduct;