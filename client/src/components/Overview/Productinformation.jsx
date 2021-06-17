import React from 'react';
import axios from 'axios';
import '../../styles/rightsidecontainer.css';


class Productinformation extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='productinfocontainer'>
        <p className='categoryText'>{this.props.currentProduct.category}</p>
        <h1>{this.props.currentProduct.name} </h1>
        <div className='saleContainer'>
          {this.props.currentStyle.sale_price ? <p className='saleText'> ${this.props.currentStyle.original_price} </p> : null}
          {this.props.currentStyle.sale_price ? <p>${this.props.currentStyle.sale_price} </p> : <p>${this.props.currentStyle.original_price} </p>}
        </div>
      </div>
    );
  }
}

export default Productinformation;

