import React, { useState, useEffect } from 'react';

import OutfitCard from './OutfitCard.jsx';
import '../../styles/relatedProducts.css';

const YourOutfitList = ({ yourOutfitList, setOutfitList, featuredProduct, getRelatedProductsList, removeOutfit, outfitList }) => {

  /* ** COMPONENT VARIABLE(s) ** */
  let outfitCards = Array.from(document.getElementsByClassName('outfit-card'));

  /* ** STATE(s) ** */
  const [cardCount, setCardCount] = useState(1);
  const [hideLeftArrow, setHideLeftArrow] = useState(false);
  const [hideRightArrow, setHideRightArrow] = useState(false);

  /* ** ADDTIONAL FUNCTION(s) ** */
  const handleNextClickOutfit = () => {
    outfitCards = Array.from(document.getElementsByClassName('outfit-card'));
    if (cardCount + 2 <= outfitCards.length) {
      outfitCards.forEach(card => {
        card.style.transform = `translateX(${cardCount * -230}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount + 1);
    }
  };

  const handlePrevClickOutfit = () => {
    outfitCards = Array.from(document.getElementsByClassName('outfit-card'));
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

  /* ** USE EFFECT CALLS ** */
  useEffect(() => {
    cardCount === 1 ? setHideLeftArrow(true) : setHideLeftArrow(false);
    (cardCount + 1) === (outfitCards.length - 1) ? setHideRightArrow(true) : setHideRightArrow(false);
  }, [cardCount]);

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
        ${hideRightArrow ? 'hideRightArrow' : 'activeArrow'}`} onClick={(e) => handleNextClickOutfit()}>❯</div>
      </div>
    </>
  );
};

export default YourOutfitList;