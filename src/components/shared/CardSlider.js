import React from 'react';
import Slider from "react-slick";
import DishCard from './DishCard';
import RecipeCard from './RecipeCard'

const SearchSlider = (props) => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    if(props.payload.length === 0 ) {
      return (<h1>Sorry No Content !</h1>)
    }else if(props.flag === 1) {
      return (
        <Slider {...settings}>
          {props.payload.map((el,index) => <DishCard food={el.food} key="index"/>)}
        </Slider>
      );
    }else {
      return (
        <Slider {...settings}>
          {props.payload.map((el,index) => <RecipeCard recipe={el.recipe} key="index"/>)}
        </Slider>
      );
    }
    
  
}
export default SearchSlider