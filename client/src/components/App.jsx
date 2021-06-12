// Imports
import React, { useState, useEffect } from 'react';
import GET from '../../../lib/related.js';

// Styles
import AppStyle from '../styles/app.css';

/* ** IMPORT COMPONENT FILES ** */
import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';

const App = () => {
  const [featuredProduct, setFeaturedProduct] = useState([]);

  useEffect(() => {
    GET.featuredProduct(19850)
      .then(res => {
        setFeaturedProduct(res.data);
      });
  }, []);

  return (
    <div>
      <h1 className={AppStyle.testClass}>CATWALK</h1>
      <Overview/>
      <RelatedProduct featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct} />
    </div>
  );
};

export default App;