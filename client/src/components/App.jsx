// Imports
import React, { useState, useEffect } from 'react';
import WithTracker from './WithTracker.jsx';
import { CgDarkMode } from 'react-icons/cg';

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

  /* ** CLICK TRACKER ** */
  const clickTracker = (e, component) => {
    e.stopPropagation();
    let data = JSON.stringify({
      'element': e.target.className,
      'time': new Date().toTimeString(),
      'widget': component
    });

    GET.interactions(data)
      .then(res => {
        console.log(`Interaction : ${data} was ${res.data}`);
      })
      .catch(err => {
        console.error('click tracker', err);
      });
  };

  const RelatedWithTracker = WithTracker(RelatedProduct);
  const OverviewWithTracker = WithTracker(Overview);

  return !featuredProduct.id ? <div>loading...</div> : (
    <div className={
      isDarkMode ? 'catwalk-dark' : 'catwalk'
    }>
      <div onClick={toggleDarkMode} className={isDarkMode ? "toggle-mode-dark" : "toggle-mode"}><CgDarkMode /></div>
      <h1 className={isDarkMode ? 'page-title-dark' : 'page-title'}>FOREVER 31</h1>
      <Overview featuredProduct={featuredProduct.id} isDarkMode={isDarkMode} componentName={'Overview'} clickTracker={clickTracker} />
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