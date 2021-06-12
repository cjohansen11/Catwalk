import React from 'react';
import axios from 'axios';
import '../../styles/productInformation.css';


class Productinformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };



  }





  render() {
    return (
      <div className='infotext'>

        <p>Category: {this.props.currentProduct.category}</p>
        <p>Product Title: {this.props.currentProduct.name} </p>
        <p>Price: {this.props.currentStyle.sale_price || this.props.currentStyle.original_price}</p>
        <p>Slogan / Description / Features</p>
      </div>
    );
  }
}

export default Productinformation;