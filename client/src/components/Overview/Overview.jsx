import * as React from 'react';
import axios from 'axios';
import Productinformation from './Productinformation.jsx';
import ImageGallary from './ImageGallary.jsx';
import Productdescription from './Productdescription.jsx';
import Addtocart from './Addtocart.jsx';
import SingleStarRating from './SingleStarRating.jsx';
import '../../styles/overview.css';
import GET from '../../../../lib/related.js';

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
      ratings: '',
    };

    this.updateCurrentSelectedStyle = this.updateCurrentSelectedStyle.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.updateStyleArray = this.updateStyleArray.bind(this);
    this.styleDropdown = this.styleDropdown.bind(this);
  }

  updateCart(data) {
    this.setState({
      cart: data
    });
  }

  updateStyleArray(styleObj) {
    this.styleDropdown(styleObj);
  }

  updateCurrentSelectedStyle(styleObj) {
    this.setState({
      currentSelectedStyle: styleObj,
    });
  }

  renderPage() {
    GET.featuredProduct(this.props.featuredProduct)
      .then((data) => {
        this.setState({
          currentProductInfo: data.data
        });
        return GET.productStyles(this.props.featuredProduct);
      })
      .then((data) => {

        var currentSelected = data.data.results[0];
        for (var i = 0; i < data.data.results.length; i++) {
          if (data.data.results[i]['default?'] === true) {
            currentSelected = data.data.results[i];
          }
        }

        this.setState({
          currentProductStylesInfo: data.data.results,
          currentSelectedStyle: currentSelected

        });
        return GET.productReviews(this.props.featuredProduct);
      })
      .then((data) => {

        this.setState({
          ratings: data.data.ratings
        });
        return GET.getCart();
      })
      .then((data) => {
        this.setState({
          cart: data.data
        });
        this.styleDropdown();
      })
      .catch((error) => {
        console.log('the data did not render', error);
      });
  }
  componentDidMount() {
    this.renderPage();
  }


  componentDidUpdate(prevProps) {
    if (this.props.featuredProduct !== prevProps.featuredProduct) {
      this.renderPage();
    }
  }

  styleDropdown(styleObj) {
    this.setState({
      styleArray: [],
    });
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
        <div className='galleryContainer'>
          <ImageGallary currentStyle={this.state.currentSelectedStyle} />
        </div>
        <div className={this.props.isDarkMode ? 'productContainer-dark' : 'productContainer'}>

          <div className='infocontainer'>
            <Productinformation currentProduct={this.state.currentProductInfo} currentStyle={this.state.currentSelectedStyle} />
            <SingleStarRating ratings={this.state.ratings} isDark={this.props.isDarkMode} />
          </div>
          <Addtocart currentStyles={this.state.currentProductStylesInfo} updateCurrentStyle={this.updateCurrentSelectedStyle} currentStyle={this.state.currentSelectedStyle} styleArray={this.state.styleArray} updateOverCart={this.updateCart} updateStyleArray={this.updateStyleArray} />
          <Productdescription currentProduct={this.state.currentProductInfo} currentStyle={this.state.currentSelectedStyle} />
        </div>
      </div>
    );
  }
}

export default Overview;




