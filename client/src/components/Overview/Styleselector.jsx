import React from 'react';
import axios from 'axios';

class Styleselector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedStyle: 'needs to be the first style',

    };
  }

  updateStyle(style) {
    console.log(style);
    this.props.updateCurrentStyle(style);

  }




  render() {

    if (!this.props.currentStyles) {
      return <span>Loading...</span>;
    }
    return (
      <div>
        <h4>Style:{this.props.currentStyle.name}</h4>

        <h4>Bunch of thumbnails:</h4>
        <div className='stylethumbnails'>
          {this.props.currentStyles.results.map(style => {
            return <div className='thumbnail' key={style.name} onClick={() => { this.updateStyle(style); }}>
              <img src={style.photos[0].thumbnail_url} />
            </div>;
          })}


        </div>
      </div>
    );
  }
}

export default Styleselector;