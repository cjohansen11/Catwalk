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
  const [productId, setProductId] = useState(19590);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const userData = [];

  /* ** SETS INITIAL ** */

  useEffect(() => {
    GET.featuredProduct(productId)
      .then(res => {
        setFeaturedProduct(res.data);
      });
  }, [productId]);

  /* ** ADDITIONAL FUNCTION(s) ** */

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  /* ** GIVES ME 401 ERRORS ON THE POST REQEST ** */
  // const clickTracker = (e, component) => {
  //   let trackerObject = {
  //     'element': e.target.className,
  //     'time': new Date().toTimeString(),
  //     'module': component
  //   };

  //   console.log(trackerObject)

  //   GET.interactions(e.target.className, new Date().toTimeString(), component)
  //     .then(res => {
  //       console.log('res', res);
  //     })
  //     .catch(err => {
  //       console.error('click tracker', err);
  //     });
  // };

  const RelatedWithTracker = WithTracker(RelatedProduct);
  const OverviewWithTracker = WithTracker(Overview);

  return !featuredProduct.id ? <div>loading...</div> : (
    <div className={
      isDarkMode ? 'catwalk-dark' : 'catwalk'
    }>
      <button onClick={toggleDarkMode}>Toggle Display</button>
      <h1 className={'page-title'}>FOREVER 31</h1>
      <Overview featuredProduct={featuredProduct.id} />
      <RelatedProduct
        userData={userData}
        featuredProduct={featuredProduct}
        setFeaturedProduct={setFeaturedProduct}
        componentName={'Related Product'}
        isDarkMode={isDarkMode}
        clickTracker={clickTracker} />
      <QuestionsAndAnswers featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct} />
      <RatingsReviews productId={featuredProduct.id} />
    </div>
  );
};

export default App;