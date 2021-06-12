import React from 'react';
import axios from 'axios';
const config = require('./config.js');


class Productinformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: '',
    };

    this.options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19078/`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${config.TOKEN}`
      }
      // //params:
    };

  }


  componentDidMount() {

    axios(this.options)
      .then((data) => {
        console.log('this is the data', data.data);
        this.setState({
          currentProduct: data.data
        });
      })
      .catch((error) => {
        console.log('the data did not renderrrr', error);
      });
  }


  render() {
    return (
      <div>
        <h4>Star Rating:</h4>
        <h4>Category: {this.state.currentProduct.category}</h4>
        <h4>Product Title: {this.state.currentProduct.name} </h4>
        <h4>Price: {this.state.currentProduct.default_price}</h4>
        <h4>Slogan / Description / Features</h4>
      </div>
    );
  }
}

export default Productinformation;