import React from 'react';
import Slider from "react-slick";


const SearchSlider = (props) => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    if(props.payload.length === 0 ) {
      return (<h1>Sorry No Content !</h1>)
    }else {
      return (
        <Slider {...settings}>
          {props.payload.map((el,key) => <div key="key">Hi</div>)}
        </Slider>
      );
    }
    
  
}
export default SearchSlider