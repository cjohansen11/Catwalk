import React from 'react';
import Modal from '../Modal.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';

describe('Related products modal', () => {
  let featuredProduct = {
    "id": 19653,
    "campus": "hr-rfe",
    "name": "Obie Pants",
    "slogan": "Non dolorum in repellendus.",
    "description": "Quos magni est voluptatum cum autem. Quaerat dolorum ex voluptas modi aut quas. Voluptas quisquam cupiditate voluptatem suscipit nobis excepturi quidem iusto.",
    "category": "Pants",
    "default_price": "219.00",
    "created_at": "2021-02-23T19:24:34.674Z",
    "updated_at": "2021-02-23T19:24:34.674Z",
    "features": [
      {
        "feature": "Material",
        "value": "\"Armor Weave\""
      },
      {
        "feature": "Lens",
        "value": "\"Ultrasheen Silver\""
      }
    ]
  };
  let comparedProduct = {
    "id": 19899,
    "campus": "hr-rfe",
    "name": "Hilma Shoes",
    "slogan": "Consectetur adipisci nulla quis ut est distinctio neque quia ut.",
    "description": "Ratione et enim distinctio voluptatem. Sed maiores itaque beatae omnis dolores et exercitationem non magni. Voluptatem ipsam dolorem quia nihil. Error doloribus consequatur aliquam. Quibusdam officiis incidunt quisquam nobis soluta. Voluptates minus est doloremque dolorem commodi nesciunt voluptatibus.",
    "category": "Shoes",
    "default_price": "723.00",
    "created_at": "2021-02-23T19:24:34.674Z",
    "updated_at": "2021-02-23T19:24:34.674Z",
    "details": {
      "features": [
        {
          "feature": "Sustainably Sourced",
          "value": null
        },
        {
          "feature": "Frame",
          "value": "\"DuraResin\""
        }
      ]
    }
  }

  it('should render a modal with a heading of "Comparison Table"', () => {
    const { container } = render(<Modal featuredProduct={featuredProduct} comparedProduct={comparedProduct}></Modal>);
    expect(screen.queryByText('Comparison Table')).toBeTruthy();
  });
  it('should render a table with grids', async () => {
    render(<Modal featuredProduct={featuredProduct} comparedProduct={comparedProduct}></Modal>);

    await screen.getByRole(/grid/i);
  });
  it('should render a modal', async () => {
    render(<Modal featuredProduct={featuredProduct} comparedProduct={comparedProduct}></Modal>);
    await screen.getByRole(/tooltip/i);
  });
  it('should register when to close the modal', async () => {
    render(<Modal featuredProduct={featuredProduct} comparedProduct={comparedProduct} setToggleModal={jest.fn()}></Modal>);
    await fireEvent.click(screen.getByRole(/tooltip/i));
  });
});