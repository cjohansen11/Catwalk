import React from 'react';
import ProductCard from '../ProductCard.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';

describe('Product Card', () => {
  // Contains data for product ID:19653 includes Featured Product data, Styles, and Reviews
  const sampleData = {
    product: {
      details: {
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
      },
      reviews: {
        "product_id": "19653",
        "ratings": {
          "2": "5",
          "3": "5",
          "4": "6",
          "5": "5"
        },
        "recommended": {
          "true": "21"
        },
        "characteristics": {
          "Fit": {
            "id": 65973,
            "value": "3.0000000000000000"
          },
          "Length": {
            "id": 65974,
            "value": "2.7619047619047619"
          },
          "Comfort": {
            "id": 65975,
            "value": "2.8571428571428571"
          },
          "Quality": {
            "id": 65976,
            "value": "3.2380952380952381"
          }
        }
      },
      styles: {
        "product_id": "19653",
        "results": [
          {
            "style_id": 107111,
            "name": "Indigo",
            "original_price": "219.00",
            "sale_price": null,
            "default?": true,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              }
            ],
            "skus": {
              "621096": {
                "quantity": 44,
                "size": "XS"
              },
              "621097": {
                "quantity": 1,
                "size": "S"
              },
              "621098": {
                "quantity": 2,
                "size": "M"
              },
              "621099": {
                "quantity": 40,
                "size": "L"
              },
              "621100": {
                "quantity": 39,
                "size": "XL"
              },
              "621101": {
                "quantity": 26,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 107112,
            "name": "Magenta",
            "original_price": "231.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              }
            ],
            "skus": {
              "621102": {
                "quantity": 22,
                "size": "XS"
              },
              "621103": {
                "quantity": 18,
                "size": "S"
              },
              "621104": {
                "quantity": 45,
                "size": "M"
              },
              "621105": {
                "quantity": 14,
                "size": "L"
              },
              "621106": {
                "quantity": 9,
                "size": "XL"
              },
              "621107": {
                "quantity": 52,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 107113,
            "name": "Lavender",
            "original_price": "219.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
            ],
            "skus": {
              "621108": {
                "quantity": 25,
                "size": "XS"
              },
              "621109": {
                "quantity": 26,
                "size": "S"
              },
              "621110": {
                "quantity": 33,
                "size": "M"
              },
              "621111": {
                "quantity": 43,
                "size": "L"
              },
              "621112": {
                "quantity": 50,
                "size": "XL"
              },
              "621113": {
                "quantity": 27,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 107114,
            "name": "Salmon",
            "original_price": "219.00",
            "sale_price": "172.00",
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
            ],
            "skus": {
              "621114": {
                "quantity": 40,
                "size": "XS"
              },
              "621115": {
                "quantity": 31,
                "size": "S"
              },
              "621116": {
                "quantity": 42,
                "size": "M"
              },
              "621117": {
                "quantity": 53,
                "size": "L"
              },
              "621118": {
                "quantity": 8,
                "size": "XL"
              },
              "621119": {
                "quantity": 47,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 107115,
            "name": "Olive",
            "original_price": "219.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
            ],
            "skus": {
              "621120": {
                "quantity": 22,
                "size": "XS"
              },
              "621121": {
                "quantity": 39,
                "size": "S"
              },
              "621122": {
                "quantity": 17,
                "size": "M"
              },
              "621123": {
                "quantity": 5,
                "size": "L"
              },
              "621124": {
                "quantity": 20,
                "size": "XL"
              },
              "621125": {
                "quantity": 5,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 107116,
            "name": "Fuchsia",
            "original_price": "219.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
            ],
            "skus": {
              "621126": {
                "quantity": 7,
                "size": "XS"
              },
              "621127": {
                "quantity": 14,
                "size": "S"
              },
              "621128": {
                "quantity": 37,
                "size": "M"
              },
              "621129": {
                "quantity": 41,
                "size": "L"
              },
              "621130": {
                "quantity": 11,
                "size": "XL"
              },
              "621131": {
                "quantity": 43,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 107117,
            "name": "Lavender",
            "original_price": "219.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
              }
            ],
            "skus": {
              "621132": {
                "quantity": 33,
                "size": "XS"
              },
              "621133": {
                "quantity": 6,
                "size": "S"
              },
              "621134": {
                "quantity": 24,
                "size": "M"
              },
              "621135": {
                "quantity": 40,
                "size": "L"
              },
              "621136": {
                "quantity": 52,
                "size": "XL"
              },
              "621137": {
                "quantity": 46,
                "size": "XXL"
              }
            }
          }
        ]
      }
    }
  }

  it('should render the product name onto a card', () => {
    const productCard = render(<ProductCard product={sampleData} ></ProductCard>);
    expect(screen.queryByText('OBIE PANTS')).toBeTruthy();
  });
  it('should render the product category onto a card', () => {
    render(<ProductCard product={sampleData} ></ProductCard>);
    expect(screen.queryByText('Pants')).toBeTruthy();
  });
  it('should render the product price onto a card', () => {
    render(<ProductCard product={sampleData} ></ProductCard>);
    expect(screen.queryByText('219.00')).toBeTruthy();
  });
  it('should render the product image onto a card', () => {
    const { container } = render(<ProductCard product={sampleData} ></ProductCard>);
    const hasImage = container.getElementsByClassName('previewImage')[0];
    expect(hasImage).toBeTruthy();
  });
  it('should render the product rating onto a card', () => {
    const { container } = render(<ProductCard product={sampleData} ></ProductCard>);
    const hasRating = container.getElementsByClassName('productRating')[0];
    expect(hasRating).toBeTruthy();
  });
  it('should render the action button onto a card', () => {
    const { container } = render(<ProductCard product={sampleData} ></ProductCard>);
    const hasActionButton = container.getElementsByClassName('actionButton')[0];
    expect(hasActionButton).toBeTruthy();
  });
});