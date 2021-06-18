import React, { useState, useEffect } from 'react';

/* ** ADDTIONAL IMPORT(s) ** */
import ProductCard from './ProductCard.jsx';
import Modal from './Modal.jsx';
import '../../styles/relatedProducts.css';

const Carousel = ({ relatedProductList, changeFeaturedProduct, featuredProduct, isDarkMode, componentName }) => {

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
    eachCard = Array.from(document.getElementsByClassName('product-card-array'));
    if (cardCount + 2 <= eachCard.length) {
      eachCard.forEach(card => {
        card.style.transform = `translateX(${cardCount * -260}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount + 1);
    }
  };

  const handlePrevClick = () => {
    eachCard = Array.from(document.getElementsByClassName('product-card-array'));
    if (cardCount > 1) {
      eachCard.forEach(card => {
        card.style.transform = `translateX(${((cardCount - 1) * -260) + 260}px)`;
        card.style.transitionDuration = '0.5s';
      });
      setCardCount(cardCount - 1);
    }
  };

  /* ** USE EFFECT CALLS ** */
  useEffect(() => {
    setHideLeftArrow(true);
    relatedProductList.length <= 4 ? setHideRightArrow(true) : setHideRightArrow(false);
  }, [relatedProductList]);

  useEffect(() => {
    cardCount === 1 ? setHideLeftArrow(true) : setHideLeftArrow(false);
    (cardCount + 3) === eachCard.length ? setHideRightArrow(true) : setHideRightArrow(false);
  }, [cardCount]);

  return (
    <>
      <div className={`${'container'} ${'related-carousel'}`} role="figure">
        <div className={`${isDarkMode ? 'left_arrow-dark' : 'left_arrow'}
        ${hideLeftArrow ? 'hideLeftArrow' : 'activeArrow'}`} onClick={() => handlePrevClick()} role="button" id="prev-button">❮</div>
        {relatedProductList.map(product => {
          return <ProductCard
            key={product.details.id + product.details.name}
            product={{product}}
            changeFeaturedProduct={changeFeaturedProduct}
            setToggleModal={setToggleModal}
            setComparedProduct={setComparedProduct}
            setCardCount={setCardCount}
            isDarkMode={isDarkMode}
            componentName={'Related Product'} />;
        })}
        <div className={`${isDarkMode ? 'right_arrow-dark' :'right_arrow'}
        ${hideRightArrow ? 'hideRightArrow' : 'activeArrow'}`} onClick={() => handleNextClick()} role="button" id="next-button">❯</div>
      </div>
      {toggleModal ? <Modal
        setToggleModal={setToggleModal}
        featuredProduct={featuredProduct}
        comparedProduct={comparedProduct}
        componentName={'Related Product'}
        isDarkMode={isDarkMode} /> : null}
    </>
  );
};

export default Carousel;