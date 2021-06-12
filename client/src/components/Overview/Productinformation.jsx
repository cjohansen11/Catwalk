import React from 'react';
import axios from 'axios';



class Productinformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

<<<<<<< HEAD
    this.options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19078/`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${config.TOKEN}`
      }
      // //params:
=======
>>>>>>> 47b370665cadef10ed472892f8cf610d36474df9
    };



  }





  render() {
    return (
      <div>
        <h4>Star Rating:</h4>
        <h4>Category: {this.props.currentProduct.category}</h4>
        <h4>Product Title: {this.props.currentProduct.name} </h4>
        <h4>Price: {this.props.currentStyle.sale_price || this.props.currentStyle.original_price}</h4>
        <h4>Slogan / Description / Features</h4>
      </div>
    );
  }
}

export default Productinformation;