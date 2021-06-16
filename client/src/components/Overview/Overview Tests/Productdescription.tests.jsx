import React from 'react';
import Productdescription from '../Productdescription.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';

describe('Product Information', () => {

  const sampleCurrentProductInfo = {
    "id": 19089,
    "campus": "hr-rfe",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-02-23T19:24:34.450Z",
    "updated_at": "2021-02-23T19:24:34.450Z",
    "features": [
      {
        "feature": "Fabric",
        "value": "Canvas"
      },
      {
        "feature": "Buttons",
        "value": "Brass"
      }
    ]
  };

  const sampleCurrentSelectedStyle = {
    "style_id": 103466,
    "name": "Forest Green & Black",
    "original_price": "140.00",
    "sale_price": null,
    "default?": true,
    "photos": [
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      }
    ],
    "skus": {
      "599531": {
        "quantity": 8,
        "size": "XS"
      },
      "599532": {
        "quantity": 16,
        "size": "S"
      },
      "599533": {
        "quantity": 17,
        "size": "M"
      },
      "599534": {
        "quantity": 10,
        "size": "L"
      },
      "599535": {
        "quantity": 15,
        "size": "XL"
      },
      "599536": {
        "quantity": 4,
        "size": "XL"
      }
    }
  };
  it('should render the product slogan onto page', () => {
    render(<Productdescription currentProduct={sampleCurrentProductInfo} currentStyle={sampleCurrentSelectedStyle} ></Productdescription>);
    expect(screen.queryByText('Blend in to your crowd')).toBeTruthy();
  });
  it('should render the product description onto the page', () => {
    render(<Productdescription currentProduct={sampleCurrentProductInfo} currentStyle={sampleCurrentSelectedStyle} ></Productdescription>);
    expect(screen.queryByText('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.')).toBeTruthy();
  });
  it('should render a product feature onto the page', () => {
    render(<Productdescription currentProduct={sampleCurrentProductInfo} currentStyle={sampleCurrentSelectedStyle} ></Productdescription>);
    expect(screen.queryByText('Fabric')).toBeTruthy();
  });


  it('should have a div called socialButtons', () => {
    render(<Productdescription currentProduct={sampleCurrentProductInfo} currentStyle={sampleCurrentSelectedStyle}> </Productdescription>);
    const socialDiv = document.getElementsByClassName('socialButtons');
    expect(socialDiv).toBeTruthy();

  });
});