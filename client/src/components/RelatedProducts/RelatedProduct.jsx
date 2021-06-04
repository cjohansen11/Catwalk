import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* ** IMPORTS ** */
import dummy from '../../../../dummy_data/related_product.js';
import GIT_TOKEN from './config.js';
import ProductCard from './ProductCard.jsx';
import RelatedStyles from '../../styles/relatedProducts.css';

const RelatedProduct = () => {

  /* ** STATE FOR DUMMY_DATA ** */
  const [featuredProduct, setFeaturedProduct] = useState({}); // Object
  const [relatedProducts, setRelatedProducts] = useState([]); // Array
  const [relatedProductList, setRelatedProductList] = useState([]); // Array of Objects

  let options = (path, id, params) => {
    return {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${path}/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${GIT_TOKEN}`
      }
    };
  };

  const getFeaturedProduct = (path, id, params) => {
    axios(options(path, id, params))
      .then(res => {
        setFeaturedProduct(res.data);
      });
  };

  const getRelatedProducts = (path, id, params) => {
    axios(options(path, id, params))
      .then(res => {
        setRelatedProducts(res.data);
      });
  };

  useEffect(() => {
    getFeaturedProduct('products', 19091);
    // getRelatedProducts('products', featuredProduct.id);
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