import React, { useState, useEffect } from 'react';

/* ** ADDTIONAL IMPORT(s) ** */
import ProductCard from './ProductCard.jsx';
import Modal from './Modal.jsx';
import '../../styles/relatedProducts.css';

const Carousel = ({ relatedProductList, changeFeaturedProduct, featuredProduct }) => {

  /* ** COMPONENT VARIABLE(s) ** */
  let eachCard = Array.from(document.getElementsByClassName('product-card-array'));

  /* ** STATE(s) ** */
  const [cardCount, setCardCount] = useState(1);
  const [hideLeftArrow, setHideLeftArrow] = useState(false);
  const [hideRightArrow, setHideRightArrow] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [comparedProduct, setComparedProduct] = useState({});

  /* ** ADDTIONAL FUNCTIONS ** */
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
      });
      setCardCount(cardCount - 1);
    }
  };

  /* ** USE EFFECT CALLS ** */
  useEffect(() => {
    cardCount === 1 ? setHideLeftArrow(true) : setHideLeftArrow(false);
    (cardCount + 1) === eachCard.length ? setHideRightArrow(true) : setHideRightArrow(false);
  }, [cardCount]);

  return (
    <>
      <div className={`${'container'} ${'carousel'}`}>
        <div className={`${'left_arrow'}
        ${hideLeftArrow ? 'hideLeftArrow' : 'activeArrow'}`} onClick={() => handlePrevClick()}>❮</div>
        {relatedProductList.map(product => {
          return <ProductCard
            key={product.details.id + product.details.name}
            product={{product}}
            changeFeaturedProduct={changeFeaturedProduct}
            setToggleModal={setToggleModal}
            setComparedProduct={setComparedProduct} />;
        })}
        <div className={`${'right_arrow'}
        ${hideRightArrow ? 'hideRightArrow' : 'activeArrow'}`} onClick={() => handleNextClick()}>❯</div>
      </div>
      {toggleModal ? <Modal
        setToggleModal={setToggleModal}
        featuredProduct={featuredProduct}
        comparedProduct={comparedProduct} /> : null}
    </>
  );
};

export default Carousel;