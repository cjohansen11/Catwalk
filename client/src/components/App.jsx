// Imports
import React, { useState, useEffect } from 'react';
import WithTracker from './WithTracker.jsx';

import GET from '../../../lib/related.js';
import Requests from '../../../lib/RatingsReviews.js';

// Styles
import AppStyle from '../styles/app.css';

/* ** IMPORT COMPONENT FILES ** */
import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';

const App = () => {

  /* ** STATE(s) ** */
  const [productId, setProductId] = useState(19653);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [reviews, setReviews] = useState([]);

  const userData = [];

  /* ** SETS INITIAL ** */

  useEffect(() => {
    GET.featuredProduct(productId)
      .then(res => {
        setFeaturedProduct(res.data);
      });
    Requests.getReviews(productId, 'relevant') // 19653
      .then((data) => {
        setReviews(data.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [productId]);

  const RelatedWithTracker = WithTracker(RelatedProduct);

  return (
    <div>
      <h1 className={AppStyle.testClass}>CATWALK</h1>
      <Overview/>
      <QuestionsAndAnswers featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct}/>
      <RelatedWithTracker userData={userData} featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct} componentName={'Related Product'} />
      <RelatedProduct userData={userData} featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct} componentName={'Related Product'} />
      <RatingsReviews productId = {productId} reviews = {reviews} />
    </div>
  );
};

export default App;