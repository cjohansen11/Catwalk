import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../styles/imageGallery.css';
import ExpandedView from './ExpandedView.jsx';
class ImageGallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleExpanded: false,
      currentUrl: '',
    };
    this.togglenotexpanded = this.togglenotexpanded.bind(this);
  }
  toggle(e, value, url) {
    e.preventDefault();
    console.log('this will run the modal');
    this.setState({
      toggleExpanded: value,
      currentUrl: url,
    });
  }

  togglenotexpanded(e, value) {
    e.preventDefault();
    this.setState({
      toggleExpanded: value,
    });
  }

  render() {
    if (!this.props.currentStyle) {
      return <span>Loading...</span>;
    }
    return (
      <div className='imageContainer'>
        <Carousel autoPlay interval="5000" transitionTime="500" >
          {this.props.currentStyle.photos.map(photo => {
            return <div className='photodiv' key={photo.url} onClick={(event) => { this.toggle(event, true, photo.url); }}>
              <img className='photo' src={photo.url} />
            </div>;
          })}
        </Carousel>
        {this.state.toggleExpanded ? <ExpandedView
          setToggle={this.togglenotexpanded}
          photoUrl={this.state.currentUrl}
        /> : null}
      </div>
    );
  }
}

export default ImageGallary;