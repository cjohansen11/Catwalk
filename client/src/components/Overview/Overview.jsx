import React from 'react';
import axios from 'axios';
import Productinformation from './Productinformation.jsx';
import Styleselector from './Styleselector.jsx';
import Addtocart from './Addtocart.jsx';
import Imagegallery from './Imagegallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className='overview'>
        <h1>Overview Section</h1>
        <Imagegallery/>
        <Productinformation />
        <Styleselector />
        <Addtocart />
      </div>
    );
  }
}

export default Overview;