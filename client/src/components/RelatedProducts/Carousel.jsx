import React, { useState } from 'react';

import ProductCard from './ProductCard.jsx';
import '../../styles/relatedProducts.css';

const Carousel = ({ relatedProductList }) => {
  const [count, setCount] = useState(0);

  const testFunc = () => {
    let classes = document.getElementsByClassName('container');
    console.log(classes);
  };

  return (
    <div className={`${'container'} ${'carousel'}`}>
      <div className={`${'left_arrow_box'}`}>
        <div className={`${'left_arrow'}`}>❮</div>
      </div>
      {relatedProductList.map(product => {
        return <ProductCard key={product.details.id} product={{product}} />;
      })}
      <div className={`${'right_arrow_box'}`}>
        <div className={`${'right_arrow'}`}>❯</div>
      </div>
    </div>
  );
};

export default Carousel;