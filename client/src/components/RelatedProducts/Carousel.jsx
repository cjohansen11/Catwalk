import React, { useState, useEffect } from 'react';

import ProductCard from './ProductCard.jsx';
import Modal from './Modal.jsx';
import '../../styles/relatedProducts.css';

const Carousel = ({ relatedProductList, changeFeaturedProduct, featuredProduct }) => {
  const [cardCount, setCardCount] = useState(1);
  const [hideLeftArrow, setHideLeftArrow] = useState(false);
  const [hideRightArrow, setHideRightArrow] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [comparedProduct, setComparedProduct] = useState({});


  let eachCard = Array.from(document.getElementsByClassName('product-card-array'));

  const handleNextClick = () => {
    // cardCount + 2 >= eachCard.length ? setHideRightArrow(true) : setHideRightArrow(false);
    // cardCount - 2 <= eachCard.length ? setHideLeftArrow(true) : setHideLeftArrow(false);

    if (cardCount + 2 <= eachCard.length) {
      eachCard.forEach(card => {
        card.style.transform = `translateX(${cardCount * -230}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount + 1);
    }
  };

  const handlePrevClick = () => {
    // cardCount + 2 >= eachCard.length ? setHideRightArrow(true) : setHideRightArrow(false);
    // cardCount - 2 <= eachCard.length ? setHideLeftArrow(true) : setHideLeftArrow(false);

    if (cardCount > 1) {
      eachCard.forEach(card => {
        card.style.transform = `translateX(${((cardCount - 1) * -230) + 230}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount - 1);
    }
  };

  return (
    <>
      <div className={`${'left_arrow'}
      ${hideLeftArrow ? 'hideLeftArrow' : 'activeArrow'}`} onClick={() => handlePrevClick()}>❮</div>
      <div className={`${'container'} ${'carousel'}`}>
        {relatedProductList.map(product => {
          return <ProductCard
            key={product.details.id + product.details.name}
            product={{product}}
            changeFeaturedProduct={changeFeaturedProduct}
            setToggleModal={setToggleModal}
            setComparedProduct={setComparedProduct} />;
        })}
      </div>
      <div className={`${'right_arrow'}
      ${hideRightArrow ? 'hideRightArrow' : 'activeArrow'}`} onClick={() => handleNextClick()}>❯</div>
      {toggleModal ? <Modal
        setToggleModal={setToggleModal}
        featuredProduct={featuredProduct}
        comparedProduct={comparedProduct} /> : null}
    </>
  );
};

export default Carousel;