import React from 'react';
import SearchSlider from '../shared/CardSlider'
import '../../assets/style/SearchResult.css'
const SearchResult = (props) => {
    let dishesArray = props.data.dishes;
    let recipeArray = props.data.recipes;
    if(dishesArray === undefined || recipeArray === undefined) {
      return (<div></div>)
    }else {
      return (
        <div className="search-result-wrapper">
          <SearchSlider payload={dishesArray} />
          {/* <SearchSlider payload={recipeArray}/> */}
        </div>
      )
    }
    /**
     * TODO: ADD CSS and wire with wrapper!
     */

  
}
export default SearchResult