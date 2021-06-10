import React from 'react';
import axios from 'axios';
import config from './config.js';
import '../../styles/styleselectaddtocart.css';

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

    var optionsCart = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart/`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${config.TOKEN}`
      }

    };

    axios(optionsCart)
      .then((data) => {
        console.log('this is the current cart state', data.data);
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
    this.getStock()
  }
  getStock() {
    var search = Object.entries(this.props.currentStyle.skus);
    for (var i = 0; i < search.length; i++) {
      if (search[i][1]['size'] === event.target.value) {
        console.log('is this loop working?');
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
    console.log(availStock, stockArray);
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






  addedToCart(click) {
    console.log('on click what', click);
    var search = Object.entries(this.props.currentStyle.skus);
    var skuId = '';
    var id = this.state.currentskuId;
    var quantity = this.state.selectedQuantity;
    var stock = this.state.currentStock;
    console.log(search);
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
        'Authorization': `${config.TOKEN}`
      },
      data: { 'sku_id': `${skuId}` }
    };
    var optionsCart = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart/`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${config.TOKEN}`
      }

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

    axios(optionsCart)
      .then((data) => {
        console.log('this is the cart', data.data);
        this.setState({
          cart: data.data
        });
        this.props.updateOverCart(data.data);

      })
      .catch((error) => {
        console.log('cart error', error);
      });

    this.props.updateStyleArray();

  }


  updateStyle(style) {
    this.setState({
      availableStockArray: [],
    })

    this.props.updateStyleArray(style);
    this.props.updateCurrentStyle(style);
    this.setState({
      dash: '-',

    });



  }


  render() {
    if (!this.props.currentStyle) {
      return <span>Loading...</span>;
    }
    return (

      <div>
          <div className='stylethumbnails'>
        <h4>Style:{this.props.currentStyle.name}</h4>

          {this.props.currentStyles.results.map(style => {
            return <div className='thumbnail' key={style.name} onClick={() => { this.updateStyle(style); }}>
              <img className='thumbnailimg' src={style.photos[0].thumbnail_url} />
            </div>;
          })}

          {/* have the map push the image url/data into a component , same comp renders over nd over but withbthe new data  */}

        </div>





          <div className='addtocartcontainer'>
        <div className="size_dropdowndiv">
          <select className="size_dropdown"placeholder='none' onChange={this.selectedSize}>
            <option>{this.conditionalDrop()}</option>

            {/* need to map the options from state */}

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

        <button className='addtocartbutton' onClick={() => this.addedToCart(this.state.selectedSize)}>Add To Cart</button>

      </div>
      </div>


    );
  }
}

export default Addtocart;




