import React, { useState } from 'react';

import ProductCard from './ProductCard.jsx';
import '../../styles/relatedProducts.css';

const Carousel = ({ relatedProductList }) => {
  const [count, setCount] = useState(0);

  const handleNextClick = () => {
    let eachCard = Array.from(document.getElementsByClassName('productCard'));

    eachCard.forEach(card => {
      card.style.transform = 'translateX(-200px)';
      console.log(card.style.transform);
    });
  };

  return (
    <div className={`${'container'} ${'carousel'}`}>
      <div className={`${'left_arrow_box'}`}>
        <div className={`${'left_arrow'}`}>❮</div>
      </div>
      {relatedProductList.map(product => {
        return <ProductCard key={product.details.id} product={{product}} />;
      })}
      <div className={`${'right_arrow_box'}`} onClick={() => handleNextClick()}>
        <div className={`${'right_arrow'}`}>❯</div>
      </div>
    </div>
  );
};

export default Carousel;