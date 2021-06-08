import React, { useState, useEffect } from 'react';

import ProductCard from './ProductCard.jsx';
import '../../styles/relatedProducts.css';

const YourOutfitList = ({ yourOutfitList, setOutfitList, featuredProduct, getRelatedProductsList }) => {
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

  const handlePrevClick = () => {
    if (cardCount > 1) {
      eachCard.forEach(card => {
        card.style.transform = `translateX(${((cardCount - 1) * -230) + 230}px)`;
        card.style.transitionDuration = '0.5s';
        console.log(card.style.transform);
      });
      setCardCount(cardCount - 1);
    }
  };

  const handleAddToOutfit = () => {
    setOutfitList(prev => [...prev, featuredProduct.id]);
  };

  return (
    <>
      <div className={`${'left_arrow'}
      ${hideLeftArrow ? 'hideLeftArrow' : 'activeArrow'}`} onClick={() => handlePrevClick()}>❮</div>
      <div className={`${'container'} ${'carousel'}`}>
        <div className={`${'productCard'} ${'add-to-outfit'}`} onClick={() => handleAddToOutfit()} >
          <div className={'plus-sign'}>+</div>
          <div className={'add-to-outfit-text'}>Add to Outfit</div>
        </div>
        {yourOutfitList.map(product => {
          return <ProductCard key={product.details.id} product={{product}} />;
        })}
      </div>
      <div className={`${'right_arrow'}
      ${hideRightArrow ? 'hideRightArrow' : 'activeArrow'}`} onClick={(e) => handleNextClick()}>❯</div>
    </>
  );
};

export default YourOutfitList;