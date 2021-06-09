import React from 'react';
import axios from 'axios';
import Productinformation from './Productinformation.jsx';
import Styleselector from './Styleselector.jsx';
import Addtocart from './Addtocart.jsx';
import Imagegallery from './Imagegallery.jsx';
const config = require('./config.js');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductInfo: '',
      currentProductStylesInfo: '',
      currentSelectedStyle: '',
      styleArray: '',
      cart: '',
      updateS: [],
    };

    this.updateCurrentSelectedStyle = this.updateCurrentSelectedStyle.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.updateStyleArayyy = this.updateStyleArayyy.bind(this);

  }

  updateCart(data) {
    this.setState({
      cart: data
    });
  }

  updateStyleArayyy() {
    this.styleDropdown();
  }

  updateCurrentSelectedStyle(styleObj) {
    this.setState({
      currentSelectedStyle: styleObj
    });

    this.styleDropdown(styleObj);
  }


  componentDidMount() {


    var optionsCart = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart/`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${config.TOKEN}`
      }

    };

    var optionsProduct = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19089/`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${config.TOKEN}`
      }

    };
    var optionsStyle = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19089/styles/`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${config.TOKEN}`
      }

    };

    axios(optionsProduct)
      .then((data) => {
        console.log('this is the product info', data.data);
        this.setState({
          currentProductInfo: data.data
        });
        return axios(optionsStyle);
      })
      .then((data) => {
        console.log('this is the styles info', data.data, 'this is default access', data.data.results[0]['default?']);
        var currentSelected = data.data.results[0];
        for (var i = 0; i < data.data.results.length; i++) {
          if (data.data.results[i]['default?'] === true) {
            currentSelected = data.data.results[i];
          }
        }

        this.setState({
          currentProductStylesInfo: data.data,
          currentSelectedStyle: currentSelected
          // default could be the defualt being true
        });
        return axios(optionsCart);
      })
      .then((data) => {
        console.log('this is the current cart state', data.data);
        this.setState({
          cart: data.data
        });
        this.styleDropdown();
      })
      .catch((error) => {
        console.log('the data did not renderrrr', error);
      });
  }




  styleDropdown(styleObj) {
    if (styleObj === undefined) {
      var currentStyleArray = Object.entries(this.state.currentSelectedStyle.skus);
    } else {
      var currentStyleArray = Object.entries(styleObj.skus);
    }


    var styleStockArray = [];
    for (var j = 0; j < currentStyleArray.length; j++) {
      var value = currentStyleArray[j][1].size;
      var block = true;
      var blob = true;
      if (currentStyleArray[j][0] === '599535') {
        blob = false;
      }
      for (var i = 0; i < this.state.cart.length; i++) {
        if (this.state.cart[i]['sku_id'] === Number(currentStyleArray[j][0])) {
          blob = true;
          if ((currentStyleArray[j][1].quantity - this.state.cart[i]['count'] || 0) < 1) {

            block = false;
          }
        }
      }
      if (block === false || blob === false) {

      } else {
        styleStockArray.push(value);
      }
    }

    if (styleStockArray.length === 0) {
      styleStockArray = '';
    }
    this.setState({
      styleArray: styleStockArray
    });


  }


  render() {
    return (
      <div className='overview'>
        <h1>Overview Section</h1>
        <Imagegallery />
        <Productinformation currentProduct={this.state.currentProductInfo} currentStyle={this.state.currentSelectedStyle} />
        <Styleselector currentStyles={this.state.currentProductStylesInfo} updateCurrentStyle={this.updateCurrentSelectedStyle} currentStyle={this.state.currentSelectedStyle} updateStyleArray={this.updateStyleArayyy} />
        <Addtocart currentStyle={this.state.currentSelectedStyle} styleArrayy={this.state.styleArray} updateOverCart={this.updateCart} updateStyleArray={this.updateStyleArayyy} />
      </div>
    );
  }
}

export default Overview;




