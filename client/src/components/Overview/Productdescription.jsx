import React from 'react';
import axios from 'axios';
import '../../styles/rightsidecontainer.css';


class Productdescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };



  }





  render() {
    if (!this.props.currentProduct) {
      return <span>Loading...Desc</span>;
    }
    return (
      <div className='productinfocontainer'>

        <h3>{this.props.currentProduct.slogan}</h3>
        <p>Description: {this.props.currentProduct.description} </p>
        <div>
          <h3>Features</h3>
          <p>{this.props.currentProduct.features[0].feature}:{this.props.currentProduct.features[0].value}</p>




        </div>
      </div>
    );
  }
}

export default Productdescription;