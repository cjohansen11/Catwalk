// Imports
import React, { useState, useEffect } from 'react';
import WithTracker from './WithTracker.jsx';
import GET from '../../../lib/related.js';

// Styles
import AppStyle from '../styles/app.css';

/* ** IMPORT COMPONENT FILES ** */
import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';

const App = () => {

  /* ** STATE(s) ** */
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const userData = []; // use $r.props.userData to access data in browser console

  /* ** SETS INITIAL ** */
  useEffect(() => {
    GET.featuredProduct(19685)
      .then(res => {
        setFeaturedProduct(res.data);
      });
  }, []);

  const RelatedWithTracker = WithTracker(RelatedProduct);

  return (
    <div>
      <h1 className={AppStyle.testClass}>CATWALK</h1>
      <Overview/>
      <RelatedProduct userData={userData} featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct} componentName={'Related Product'} />
    </div>
  );
};

export default App;