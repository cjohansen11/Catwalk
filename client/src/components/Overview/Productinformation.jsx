import React from 'react';
import axios from 'axios';
import '../../styles/rightsidecontainer.css';


class Productinformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };



  }





  render() {
    return (
      <div className='productinfocontainer'>

        <p>{this.props.currentProduct.category}</p>
        <h1>{this.props.currentProduct.name} </h1>
        <p>${this.props.currentStyle.sale_price || this.props.currentStyle.original_price}</p>

      </div>
    );
  }
}

export default Productinformation;