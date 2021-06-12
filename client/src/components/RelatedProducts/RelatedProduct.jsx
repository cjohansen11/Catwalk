/* ** LIBRARY(s) ** */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* ** ADDTIONAL IMPORT(s) ** */
import GET from '../../../../lib/related.js';
import ProductCard from './ProductCard.jsx';
import Carousel from './Carousel.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import RelatedStyles from '../../styles/relatedProducts.css';

const RelatedProduct = ({ featuredProduct, setFeaturedProduct }) => {

  /* ** COMPONENT VARIABLE(s) ** */
  let localStorage = window.localStorage;

  /* ** STATE(s) ** */
  const [relatedProducts, setRelatedProducts] = useState([]); // Array
  const [relatedProductList, setRelatedProductList] = useState([]); // Array of Objects
  const [outfitList, setOutfitList] = useState(JSON.parse(localStorage.getItem('myOutfit')) || []); // Array
  const [yourOutfitList, setYourOutfitList] = useState([]); // Array of Objects

  /* ** ADDTIONAL FUNCTION(s) ** */
  const getRelatedProductsList = (array, type) => {
    array.length && type === 'related' ? setRelatedProductList([]) : setYourOutfitList([]);
    array.forEach(productId => {
      axios.all([GET.featuredProduct(productId), GET.productStyles(productId), GET.productReviews(productId)])
        .then(axios.spread((...res) => {
          type === 'related' ? setRelatedProductList(relatedProductList => [...relatedProductList, { 'details': res[0].data, 'styles': res[1].data, 'reviews': res[2].data }]) : setYourOutfitList(prev => [...prev, { 'details': res[0].data, 'styles': res[1].data, 'reviews': res[2].data }]);
        }));
    });
  };

  const changeFeaturedProduct = (productId) => {
    GET.featuredProduct(productId)
      .then(res => {
        setFeaturedProduct(res.data);
      });
  };

  const removeOutfit = (productId) => {
    setOutfitList(outfitList.filter(item => item !== productId));
  };

  /* ** USE EFFECT CALLS ** */
  useEffect(() => {
    GET.relatedProducts(featuredProduct.id)
      .then(res => {
        setRelatedProducts(res.data);
      });
  }, [featuredProduct]);

  useEffect(() => {
    getRelatedProductsList(relatedProducts, 'related');
  }, [relatedProducts]);

  useEffect(() => {
    getRelatedProductsList(outfitList, 'outfit');
    localStorage.setItem('myOutfit', JSON.stringify(outfitList));
  }, [outfitList]);

  return (
    <div>
      <h2 className={RelatedStyles.h2}> Welcome to the Related Products section</h2>
      <Carousel
        relatedProductList={relatedProductList}
        changeFeaturedProduct={changeFeaturedProduct}
        featuredProduct={featuredProduct} />
      <h2>Welcome to the Your Outfit section</h2>
      <YourOutfitList
        yourOutfitList={yourOutfitList}
        setOutfitList={setOutfitList}
        featuredProduct={featuredProduct}
        getRelatedProductsList={getRelatedProductsList}
        outfitList={outfitList}
        removeOutfit={removeOutfit} />
    </div>
  );
};

export default RelatedProduct;