import React, { useState } from 'react';
import YourOutfitList from '../YourOutfitList.jsx';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Your Outfit List carousel', () => {
  const relatedProductList = {
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
    },
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
    },
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
    },
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
    },
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
  };
  it('should register a click on the next button', async () => {

    render(<YourOutfitList yourOutfitList={
      [{
        "details": {
          "id": 20005,
          "campus": "hr-rfe",
          "name": "Roselyn Skirt",
          "slogan": "Id quia ad mollitia deleniti eum similique natus.",
          "description": "Accusantium repudiandae ut asperiores qui voluptatem repudiandae facere. Est suscipit quia. Rem voluptates et ad repellendus itaque maiores. Eaque laborum cupiditate in. Et quos voluptatem. Nobis rerum at nemo quis tempora rem ab aliquam.",
          "category": "Skirt",
          "default_price": "834.00",
          "created_at": "2021-02-23T19:24:34.674Z",
          "updated_at": "2021-02-23T19:24:34.674Z",
          "features": [
            {
              "feature": "5 Year Warranty",
              "value": null
            },
            {
              "feature": "Buttons",
              "value": "\"Brass\""
            },
            {
              "feature": "5 Year Warranty",
              "value": null
            },
            {
              "feature": "Material",
              "value": "\"FullSupport Hybrid Compound\""
            }
          ]
        },
        "styles": {
          "product_id": "20005",
          "results": [
            {
              "style_id": 109401,
              "name": "Silver",
              "original_price": "834.00",
              "sale_price": null,
              "default?": true,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80"
                }
              ],
              "skus": {
                "634576": {
                  "quantity": 40,
                  "size": "XS"
                },
                "634577": {
                  "quantity": 19,
                  "size": "S"
                },
                "634578": {
                  "quantity": 39,
                  "size": "M"
                },
                "634579": {
                  "quantity": 35,
                  "size": "L"
                },
                "634580": {
                  "quantity": 6,
                  "size": "XL"
                },
                "634581": {
                  "quantity": 0,
                  "size": "XXL"
                }
              }
            },
            {
              "style_id": 109402,
              "name": "Ivory",
              "original_price": "834.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                }
              ],
              "skus": {
                "634582": {
                  "quantity": 37,
                  "size": "XS"
                },
                "634583": {
                  "quantity": 53,
                  "size": "S"
                },
                "634584": {
                  "quantity": 58,
                  "size": "M"
                },
                "634585": {
                  "quantity": 41,
                  "size": "L"
                },
                "634586": {
                  "quantity": 20,
                  "size": "XL"
                },
                "634587": {
                  "quantity": 30,
                  "size": "XXL"
                }
              }
            },
            {
              "style_id": 109403,
              "name": "Grey",
              "original_price": "834.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
                }
              ],
              "skus": {
                "634588": {
                  "quantity": 35,
                  "size": "XS"
                },
                "634589": {
                  "quantity": 37,
                  "size": "S"
                },
                "634590": {
                  "quantity": 42,
                  "size": "M"
                },
                "634591": {
                  "quantity": 19,
                  "size": "L"
                },
                "634592": {
                  "quantity": 45,
                  "size": "XL"
                },
                "634593": {
                  "quantity": 44,
                  "size": "XXL"
                }
              }
            },
            {
              "style_id": 109404,
              "name": "White",
              "original_price": "834.00",
              "sale_price": "140.00",
              "default?": false,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
                }
              ],
              "skus": {
                "634594": {
                  "quantity": 40,
                  "size": "XS"
                },
                "634595": {
                  "quantity": 58,
                  "size": "S"
                },
                "634596": {
                  "quantity": 40,
                  "size": "M"
                },
                "634597": {
                  "quantity": 23,
                  "size": "L"
                },
                "634598": {
                  "quantity": 47,
                  "size": "XL"
                },
                "634599": {
                  "quantity": 16,
                  "size": "XXL"
                }
              }
            },
            {
              "style_id": 109405,
              "name": "Olive",
              "original_price": "834.00",
              "sale_price": "662.00",
              "default?": false,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
              ],
              "skus": {
                "634600": {
                  "quantity": 49,
                  "size": "XS"
                },
                "634601": {
                  "quantity": 31,
                  "size": "S"
                },
                "634602": {
                  "quantity": 57,
                  "size": "M"
                },
                "634603": {
                  "quantity": 12,
                  "size": "L"
                },
                "634604": {
                  "quantity": 49,
                  "size": "XL"
                },
                "634605": {
                  "quantity": 56,
                  "size": "XXL"
                }
              }
            },
            {
              "style_id": 109406,
              "name": "Orange",
              "original_price": "834.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
              ],
              "skus": {
                "634606": {
                  "quantity": 51,
                  "size": "XS"
                },
                "634607": {
                  "quantity": 22,
                  "size": "S"
                },
                "634608": {
                  "quantity": 21,
                  "size": "M"
                },
                "634609": {
                  "quantity": 55,
                  "size": "L"
                },
                "634610": {
                  "quantity": 11,
                  "size": "XL"
                },
                "634611": {
                  "quantity": 39,
                  "size": "XXL"
                }
              }
            },
            {
              "style_id": 109407,
              "name": "Tan",
              "original_price": "834.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                }
              ],
              "skus": {
                "634612": {
                  "quantity": 22,
                  "size": "XS"
                },
                "634613": {
                  "quantity": 16,
                  "size": "S"
                },
                "634614": {
                  "quantity": 15,
                  "size": "M"
                },
                "634615": {
                  "quantity": 2,
                  "size": "L"
                },
                "634616": {
                  "quantity": 32,
                  "size": "XL"
                },
                "634617": {
                  "quantity": 18,
                  "size": "XXL"
                }
              }
            },
            {
              "style_id": 109408,
              "name": "White",
              "original_price": "834.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                }
              ],
              "skus": {
                "634618": {
                  "quantity": 37,
                  "size": "XS"
                },
                "634619": {
                  "quantity": 35,
                  "size": "S"
                },
                "634620": {
                  "quantity": 7,
                  "size": "M"
                },
                "634621": {
                  "quantity": 10,
                  "size": "L"
                },
                "634622": {
                  "quantity": 6,
                  "size": "XL"
                },
                "634623": {
                  "quantity": 44,
                  "size": "XXL"
                }
              }
            },
            {
              "style_id": 109409,
              "name": "Purple",
              "original_price": "834.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
              ],
              "skus": {
                "634624": {
                  "quantity": 7,
                  "size": "XS"
                },
                "634625": {
                  "quantity": 50,
                  "size": "S"
                },
                "634626": {
                  "quantity": 25,
                  "size": "M"
                },
                "634627": {
                  "quantity": 5,
                  "size": "L"
                },
                "634628": {
                  "quantity": 37,
                  "size": "XL"
                },
                "634629": {
                  "quantity": 50,
                  "size": "XXL"
                }
              }
            }
          ]
        },
        "reviews": {
          "product_id": "20005",
          "ratings": {
            "1": "4",
            "2": "3",
            "3": "7",
            "4": "3",
            "5": "7"
          },
          "recommended": {
            "false": "4",
            "true": "20"
          },
          "characteristics": {
            "Fit": {
              "id": 67150,
              "value": "2.8333333333333333"
            },
            "Length": {
              "id": 67151,
              "value": "2.8333333333333333"
            },
            "Comfort": {
              "id": 67152,
              "value": "2.9583333333333333"
            },
            "Quality": {
              "id": 67153,
              "value": "3.4166666666666667"
            }
          }
        }
      }]
    }></YourOutfitList>);

    const nextButton = await screen.getByText(/❯/i);
    await fireEvent.click(nextButton);

    const productCard = await screen.getByRole(/figure/);
    // console.log(productCard)

    const prevButton = await screen.getByText(/❮/i);
    await fireEvent.click(prevButton);
  });
});