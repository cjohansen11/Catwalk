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

  const userData = [];

  /* ** SETS INITIAL ** */

  useEffect(() => {
    GET.featuredProduct(productId)
      .then(res => {
        setFeaturedProduct(res.data);
      });
    // Requests.getReviews(productId, 'relevant') // 19653
    //   .then((data) => {
    //     setReviews(data.data.results);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, [productId]);

  const RelatedWithTracker = WithTracker(RelatedProduct);
  const OverviewWithTracker = WithTracker(Overview);

  return !featuredProduct.id ? <div>loading...</div> : (
    <div>
      <h1 className={AppStyle.testClass}>CATWALK</h1>
      <Overview featuredProduct={featuredProduct}/>
      <RelatedProduct userData={userData} featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct} componentName={'Related Product'} />
      <QuestionsAndAnswers featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct}/>
      <RatingsReviews productId = {productId} />
    </div>
  );
};

export default App;