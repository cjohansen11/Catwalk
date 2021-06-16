import React from 'react';
import ImageGallary from '../ImageGallary.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';

describe('Image Gallery', () => {

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


  it('should have a div called imageContainer', () => {
    render(<ImageGallary currentStyle={sampleCurrentSelectedStyle}> </ImageGallary>);
    const imageDiv = document.getElementsByClassName('imageContainer');
    expect(imageDiv).toBeTruthy();

  });

  it('should have multiple divs called photodiv', () => {
    render(<ImageGallary currentStyle={sampleCurrentSelectedStyle}> </ImageGallary>);
    const photoDiv = document.getElementsByClassName('photodiv');
    expect(photoDiv).toBeTruthy();

  });

  it('should have multiple images called photo', () => {
    render(<ImageGallary currentStyle={sampleCurrentSelectedStyle}> </ImageGallary>);
    const photoImg = document.getElementsByClassName('photo');
    expect(photoImg).toBeTruthy();

  });
});