import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../styles/imageGallery.css';

class ImageGallaryComponent extends React.Component {
  render() {
    if (!this.props.currentStyle) {
      return <span>Loading...</span>;
    }
    return (
      <div>
        <h2 className='gallerytitle'>My Image Gallery</h2>
        <Carousel autoPlay interval="5000" transitionTime="500">


          {this.props.currentStyle.photos.map(photo => {
            return <div className='photodiv' key={photo.url}>
              <img className='photo' src={photo.url} />

            </div>;
          })}








        </Carousel>
      </div>
    )
  };
}

export default ImageGallaryComponent;