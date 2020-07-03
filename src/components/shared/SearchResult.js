import React from 'react';
import SearchSlider from '../shared/CardSlider'
import '../../assets/style/SearchResult.css'
import { Container } from 'react-bootstrap';
const SearchResult = (props) => {
    let dishesArray = props.data.dishes;
    let recipeArray = props.data.recipes;
    if(dishesArray === undefined || recipeArray === undefined) {
      return (<div></div>)
    }else {
      return (
        <Container>
          <div className="search-result-wrapper">
            <div>
              <h1>Food</h1>
              <SearchSlider payload={dishesArray} flag={1} />
            </div>
            <div>
              <h1>Recipes</h1>
              <SearchSlider payload={recipeArray} flag={0}/> 
            </div>
          </div>
        </Container>
      )
    }
}
export default SearchResult