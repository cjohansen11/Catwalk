import React, { useState, useEffect } from 'react';
import { SiAddthis } from 'react-icons/si';

import OutfitCard from './OutfitCard.jsx';
import '../../styles/relatedProducts.css';

const YourOutfitList = ({ handleAddToOutfit, yourOutfitList, setOutfitList, removeOutfit, outfitList, isDarkMode }) => {

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
        card.style.transform = `translateX(${cardCount * -260}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount + 1);
    }
  };

  const handlePrevClickOutfit = () => {
    outfitCards = Array.from(document.getElementsByClassName('outfit-card'));
    if (cardCount > 1) {
      outfitCards.forEach(card => {
        card.style.transform = `translateX(${((cardCount - 1) * -260) + 260}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount - 1);
    }
  };

  /* ** USE EFFECT CALLS ** */
  useEffect(() => {
    yourOutfitList.length < 4 ? setHideRightArrow(true) : setHideRightArrow(false);
  }, [yourOutfitList]);

  useEffect(() => {
    cardCount === 1 ? setHideLeftArrow(true) : setHideLeftArrow(false);
    (cardCount + 3) === outfitCards.length ? setHideRightArrow(true) : setHideRightArrow(false);
  }, [cardCount]);

  return (
    <>
      <div className={`${'container'} ${'outfit-carousel'} ${'outfit-container'}`}role="figure">
        <div className={`${isDarkMode ? 'left_arrow-dark' : 'left_arrow'}
        ${hideLeftArrow ? 'hideLeftArrow' : 'activeArrow'}`}
        onClick={handlePrevClickOutfit}>❮</div>
        <div className={`${isDarkMode ? 'productCard-dark' : 'productCard'} ${isDarkMode ? 'add-to-outfit-dark' : 'add-to-outfit'} ${'outfit-card'}`}
          onClick={handleAddToOutfit} >
          <div className={'plus-sign'}><SiAddthis /></div>
          <div className={'add-to-outfit-text'}>Add to Outfit</div>
        </div>
        {yourOutfitList.map(product => {
          return <OutfitCard
            key={product.details.id + product.details.name}
            product={{product}}
            removeOutfit={removeOutfit}
            isDarkMode={isDarkMode} />;
        })}
        <div className={`${isDarkMode ? 'right_arrow-dark' : 'right_arrow'}
        ${hideRightArrow ? 'hideRightArrow' : 'activeArrow'}`} onClick={handleNextClickOutfit}>❯</div>
      </div>
    </>
  );
};

export default YourOutfitList;