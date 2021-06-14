import axios from 'axios';
import GIT_TOKEN from './config.js';

export default {
  featuredProduct: (id) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, {
      headers: {
        'Authorization': GIT_TOKEN
      }
    });
  },
  relatedProducts: (id) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/related`, {
      headers: {
        'Authorization': GIT_TOKEN
      }
    });
  },
  productStyles: (id) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, {
      headers: {
        'Authorization': GIT_TOKEN
      }
    });
  },
  productReviews: (id) => {
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta', {
      headers: {
        'Authorization': GIT_TOKEN
      },
      params: {
        'product_id': id
      }
    });
  },


  addtoCart: (skuId) => {
    return axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart', {
      headers: {
        'Authorization': GIT_TOKEN
      },
      data: { 'sku_id': `${skuId}` }
    });
  },


  getCart: () => {
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart', {
      headers: {
        'Authorization': GIT_TOKEN
      },
    });
  },
};


