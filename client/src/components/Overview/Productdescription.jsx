import React from 'react';
import axios from 'axios';
import '../../styles/rightsidecontainer.css';
import { TiSocialTwitter } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';

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
        <div className='socialButtons'>
          <a href='https://www.facebook.com/' className='fB'><IoLogoFacebook /></a>
          <a href='https://instagram.com/' className='iG'><FaInstagram /></a>
          <a href='https://twitter.com/' className='tW'><TiSocialTwitter /></a>
        </div>

      </div>
    );
  }
}

export default Productdescription;