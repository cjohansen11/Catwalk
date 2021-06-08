import React, { useState, useEffect } from 'react';

import ProductCard from './ProductCard.jsx';
import '../../styles/relatedProducts.css';

const Carousel = ({ relatedProductList }) => {
  const [cardCount, setCardCount] = useState(1);
  const [hideLeftArrow, setHideLeftArrow] = useState(false);
  const [hideRightArrow, setHideRightArrow] = useState(false);


  let eachCard = Array.from(document.getElementsByClassName('productCard'));

  const handleNextClick = () => {

    if (cardCount + 2 <= eachCard.length) {
      eachCard.forEach(card => {
        card.style.transform = `translateX(${cardCount * -230}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount + 1);
    }
  };

  const handlePevClick = () => {

    if (cardCount > 1) {
      eachCard.forEach(card => {
        card.style.transform = `translateX(${((cardCount - 1) * -230) + 230}px)`;
        card.style.transitionDuration = '0.5s';
        console.log(card.style.transform);
      });
      setCardCount(cardCount - 1);
    }
  };

  useEffect(() => {
    cardCount <= eachCard.length ? null : setHideRightArrow(true);
  }, [cardCount]);

  return (
    <>
      <div className={`${'left_arrow'}
      ${hideLeftArrow ? 'hideLeftArrow' : 'activeArrow'}`} onClick={() => handlePevClick()}>❮</div>
      <div className={`${'container'} ${'carousel'}`}>
        {relatedProductList.map(product => {
          return <ProductCard key={product.details.id} product={{product}} />;
        })}
      </div>
      <div className={`${'right_arrow'}
      ${hideRightArrow ? 'hideRightArrow' : 'activeArrow'}`} onClick={(e) => handleNextClick()}>❯</div>
    </>
  );
};

export default Carousel;