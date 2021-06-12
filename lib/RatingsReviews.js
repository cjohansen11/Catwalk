import axios from 'axios';
import GIT_TOKEN from './config.js';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

export default {
  getReviews: (id, sort = 'relevant') => {
    let options = {
      method: 'get',
      url: `${API_URL}/reviews/`,
      headers: {
        'Authorization': GIT_TOKEN
      },
      params: {
        sort,
        product_id: id,
        count: 50,
      }
    };
    return axios(options);
  },

  getReviewMetadata: (id) => {
    const options = {
      method: 'get',
      url: `${API_URL}/reviews/meta`,
      headers: {
        'Authorization': GIT_TOKEN
      },
      params: {
        product_id: id
      }
    };
    return axios(options);
  },

  updateHelpfulReview: (id) => {
    const options = {
      method: 'put',
      url: `${API_URL}/reviews/${id}/helpful`,
      headers: {
        'Authorization': GIT_TOKEN
      },
      params: {
        review_id: id
      }
    };
    return axios(options);
  },

  reportReview: (id) => {
    const options = {
      method: 'put',
      url: `${API_URL}/reviews/${id}/report`,
      headers: {
        'Authorization': GIT_TOKEN
      },
      params: {
        review_id: id
      }
    };
    return axios(options);
  }
};