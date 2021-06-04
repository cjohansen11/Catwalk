import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* ** IMPORTS ** */
import dummy from '../../../../dummy_data/related_product.js';
import GIT_TOKEN from './config.js';
import ProductCard from './ProductCard.jsx';
import RelatedStyles from '../../styles/relatedProducts.css';

const RelatedProduct = () => {

  /* ** STATE FOR DUMMY_DATA ** */
  const [featuredProduct, setFeaturedProduct] = useState(dummy.mainProduct); // Object
  const [relatedProducts, setRelatedProducts] = useState(dummy.related); // Array
  const [relatedProductList, setRelatedProductList] = useState(dummy.relatedProductList); // Array of Objects

  const headers = {
    'User-Agent': 'request',
    'Authorization': `Basic ${GIT_TOKEN}`
  };

  const options = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19091',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${GIT_TOKEN}`
    }
  };

  const getFeaturedProduct = () => axios(options)
    .then(res => {
      setFeaturedProduct(res.data);
    });

  useEffect(() => {
    getFeaturedProduct;
  }, []);

  return (
    <div>
      {console.log(featuredProduct)}
      <h2 className={RelatedStyles.h2}> Welcome to the Related Products section</h2>
      {relatedProductList.map(product => {
        // return <ProductCard key={product.id} product={product} />;
      })}
      <h2>Welcome to the Your Outfit section</h2>
      <ProductCard />
    </div>
  );
};

export default RelatedProduct;