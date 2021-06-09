import React, { useState, useEffect } from 'react';

import OutfitCard from './OutfitCard.jsx';
import '../../styles/relatedProducts.css';

const YourOutfitList = ({ yourOutfitList, setOutfitList, featuredProduct, getRelatedProductsList, removeOutfit, outfitList }) => {
  const [cardCount, setCardCount] = useState(1);
  const [hideLeftArrow, setHideLeftArrow] = useState(false);
  const [hideRightArrow, setHideRightArrow] = useState(false);


  let outfitCards = Array.from(document.getElementsByClassName('outfit-card'));

  const handleNextClickOutfit = () => {
    if (cardCount + 2 <= outfitCards.length) {
      outfitCards.forEach(card => {
        card.style.transform = `translateX(${cardCount * -230}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount + 1);
    }
  };

  const handlePrevClickOutfit = () => {
    if (cardCount > 1) {
      outfitCards.forEach(card => {
        card.style.transform = `translateX(${((cardCount - 1) * -230) + 230}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount - 1);
    }
  };

  const handleAddToOutfit = () => {
    !outfitList.includes(featuredProduct.id) ? setOutfitList(prev => [...prev, featuredProduct.id]) : null;
  };

  return (
    <>
      <div className={`${'container'} ${'carousel'} ${'outfit-container'}`}>
        <div className={`${'left_arrow'}
        ${hideLeftArrow ? 'hideLeftArrow' : 'activeArrow'}`}
        onClick={() => handlePrevClickOutfit()}>❮</div>
        <div className={`${'productCard'} ${'add-to-outfit'} ${'outfit-card'}`}
          onClick={() => handleAddToOutfit()} >
          <div className={'plus-sign'}>+</div>
          <div className={'add-to-outfit-text'}>Add to Outfit</div>
        </div>
        {yourOutfitList.map(product => {
          return <OutfitCard
            key={product.details.id + product.details.name}
            product={{product}}
            removeOutfit={removeOutfit} />;
        })}
        <div className={`${'right_arrow'}
        ${hideRightArrow ? 'hideRightArrow' : 'activeArrow'}`} onClick={() => handleNextClickOutfit()}>❯</div>
      </div>
    </>
  );
};

export default YourOutfitList;