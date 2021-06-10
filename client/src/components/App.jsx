// Imports
import React, { useState, useEffect } from 'react';

// Styles
import AppStyle from '../styles/app.css';

/* ** IMPORT COMPONENT FILES ** */
import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';

const App = () => {
  const [featuredProduct, setFeaturedProduct] = useState([]);

  return (
    <div>
      <h1 className={AppStyle.testClass}>CATWALK</h1>
      <Overview/>
      <RelatedProduct /*props={this.state}*/ />
    </div>
  );
};

export default App;