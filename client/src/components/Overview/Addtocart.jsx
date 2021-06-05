import React from 'react';
import axios from 'axios';


class Addtocart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <div className="size_dropdown">
          <select placeholder='none' >
            <option>Select Size</option>
            <option>xs</option>
            <option>s</option>
            {/* need to map the options from state */}
          </select>
        </div>

        <div className="quantity_dropdown">

          <select placeholder='none'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            {/* need to map the options from state */}
          </select>
        </div>

        <button>Add To Cart</button>

      </div>
    );
  }
}

export default Addtocart;