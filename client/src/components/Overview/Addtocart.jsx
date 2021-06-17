import React from 'react';
import axios from 'axios';
import '../../styles/rightsidecontainer.css';
import GET from '../../../../lib/related.js';
import GIT_TOKEN from '../../../../lib/config.js';


class Addtocart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: '',
      cart: '',
      selectedQuantity: 1,
      currentskuId: '',
      currentStyleStock: '',
      availableStock: '',
      availableStockArray: [],
      dash: '-',
    };

    this.selectedSize = this.selectedSize.bind(this);
    this.selectedQuantity = this.selectedQuantity.bind(this);
  }

  componentDidMount() {
    GET.getCart()
      .then((data) => {

        this.setState({
          cart: data.data
        });
      })
      .catch((error) => {
        console.log('cart error', error);
      });
  }

  conditionalDrop() {
    if (this.props.styleArrayy.length === 0) {
      return 'OUT OF STOCK';
    } else {
      return 'Select Size';
    }
  }

  selectedQuantity(event) {
    this.setState({
      selectedQuantity: event.target.value,
    });
  }
  selectedSize(event) {
    this.setState({
      selectedSize: event.target.value,
    });
    this.getStock();
  }
  getStock() {
    var search = Object.entries(this.props.currentStyle.skus);
    for (var i = 0; i < search.length; i++) {
      if (search[i][1]['size'] === event.target.value) {
        var sku = Number(search[i][0]);
        var styleStock = search[i][1]['quantity'];
        this.setState({
          currentskuId: search[i][0],
          currentStyleStock: search[i][1]['quantity']
        });
      }
    }
    var cartArray = Object.entries(this.state.cart);
    var purchased = 0;
    for (var i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i]['sku_id'] === sku) {
        purchased = this.state.cart[i]['count'];
      }
    }
    var availStock = styleStock - purchased;
    var stockArray = this.stockArray(availStock);
    var dashValue = this.dashValue(availStock);
    this.setState({
      availableStock: availStock,
      availableStockArray: stockArray,
      dash: dashValue,
    });
  }

  dashValue(num) {
    if (num < 1) {
      return 1;
    } else {
      return 1;
    }
  }

  stockArray(num) {
    var result = [];
    var num = num;
    if (num > 15) {
      num = 15;
    }
    for (var i = 2; i <= num; i++) {
      result.push(i);
    }
    return result;
  }

  addedToCart(e, click) {
    e.preventDefault();
    var search = Object.entries(this.props.currentStyle.skus);
    var skuId = '';
    var id = this.state.currentskuId;
    var quantity = this.state.selectedQuantity;
    var stock = this.state.currentStock;

    for (var i = 0; i < search.length; i++) {
      if (search[i][1]['size'] === this.state.selectedSize) {
        skuId = search[i][0];
      }
    }

    var optionsAddCart = {
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': GIT_TOKEN,
      },
      data: { 'sku_id': `${skuId}` }
    };

    for (var i = 0; i < quantity; i++) {
      axios(optionsAddCart)
        .then((data) => {
          console.log('added to cart!');
        })
        .catch((error) => {
          console.log('cart error', error);
        });
    }

    GET.getCart()
      .then((data) => {

        this.setState({
          cart: data.data
        });
        this.props.updateOverCart(data.data);

      })
      .catch((error) => {
      });
    this.props.updateStyleArray();
  }

  updateStyle(e, style) {
    e.preventDefault();
    this.setState({
      availableStockArray: [],
    });
    this.props.updateStyleArray(style);
    this.props.updateCurrentStyle(style);
    this.setState({
      dash: '-',
    });
  }

  render() {
    if (!this.props.currentStyle) {
      return <span>Loading...AC</span>;
    }
    return (
      <div className='stylecontainer'>
        <h3>Style > {this.props.currentStyle.name}</h3>
        <div className='thumbnailcontainer'>
          {this.props.currentStyles.map(style => {
            let classcheck = 'thumbnail';
            if (style.style_id === this.props.currentStyle.style_id) {
              classcheck = 'thumbnail check';
            }
            return <div className={classcheck} key={style.style_id} onClick={(event) => { this.updateStyle(event, style); }}>
              <img className='thumbnailimg' src={style.photos[0].thumbnail_url} />
            </div>;
          })}
        </div>
        <div className='addtocartcontainer'>
          <div className="size_dropdowndiv">
            <select className="size_dropdown" placeholder='none' onChange={this.selectedSize}>
              <option>{this.conditionalDrop()}</option>
              {Object.entries(this.props.styleArrayy).map(style => {
                return (
                  <option key={(style)}>{style.slice(1)}</option>
                );
              })
              }
            </select>
          </div>
          <div className="quantity_dropdowndiv">
            <select className="quantity_dropdown" placeholder='none' onChange={this.selectedQuantity}>
              <option>{this.state.dash}</option>
              {this.state.availableStockArray.map(num => {
                return <option key={num}>{num}</option>;
              })}
            </select>
          </div>
          <button className='addtocartbutton' onClick={(event) => this.addedToCart(event, this.state.selectedSize)}>Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default Addtocart;




