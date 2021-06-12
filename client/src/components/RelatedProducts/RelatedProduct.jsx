import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* ** IMPORTS ** */
import dummy from '../../../../dummy_data/related_product.js';
import GIT_TOKEN from '../QuestionsAndAnswers/config.js';
import ProductCard from './ProductCard.jsx';
import Carousel from './Carousel.jsx';
import RelatedStyles from '../../styles/relatedProducts.css';

const RelatedProduct = () => {

  /* ** STATE FOR DUMMY_DATA ** */
  const [featuredProduct, setFeaturedProduct] = useState({}); // Object
  const [relatedProducts, setRelatedProducts] = useState([]); // Array
  const [relatedProductList, setRelatedProductList] = useState([]); // Array of Objects

  /* ** OPTIONS FOR AXIOS REQUESTS ** */
  let options = (path, id, path2, params) => {
    if (path2) {
      return {
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${path}/${id}/${path2}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${GIT_TOKEN}`
        }
      };
    }
    if (path === 'reviews') {
      return {
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${path}/meta`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${GIT_TOKEN}`
        },
        params: {
          'product_id': id
        }
      };
    }
    return {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${path}/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${GIT_TOKEN}`
      }
    };
  };

  /* ** SET STATE METHODS ** */
  const getRelatedProductsList = () => {
    let eachProductId;

    relatedProducts.forEach(product => {
      let eachProductObject = {};
      axios(options('products', product))
        .then(res => {
          eachProductObject['details'] = res.data;
          axios(options('products', product, 'styles'))
            .then(res => {
              eachProductObject['styles'] = res.data;
              axios(options('reviews', product))
                .then(res => {
                  eachProductObject['reviews'] = res.data;
                  setRelatedProductList(relatedProductList => [...relatedProductList, eachProductObject]);
                });
            });
        });
    });
  };

  const getRelatedProducts = (path, id, path2) => {
    return axios(options(path, id, path2));
  };

  const getFeaturedProduct = (path, id) => {
    axios(options(path, id))
      .then(res => {
        setFeaturedProduct(res.data);
        return res.data;
      })
      .then(product => {
        getRelatedProducts('products', product.id, 'related')
          .then(res => {
            return setRelatedProducts(res.data);
          });
      });
  };

  /* USE EFFECT CALLS ** */
  useEffect(() => {
    getFeaturedProduct('products', 19091);
  }, []);

  useEffect(() => {
    getRelatedProductsList();
  }, [relatedProducts]);

  // if (!relatedProductList.length) {
  //   return (
  //     <h1>Still Loading...</h1>
  //   );
  // }

  return (
    <div>
      <h2 className={RelatedStyles.h2}> Welcome to the Related Products section</h2>
      <Carousel relatedProductList={relatedProductList} />
      <h2>Welcome to the Your Outfit section</h2>
      {/* <ProductCard /> */}
    </div>
  );
};

export default RelatedProduct;