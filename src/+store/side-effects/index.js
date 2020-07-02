import Axios from 'axios'

/**
 * @description: API SERVICE CLASS, used as sideeffects by actions.
 * 
 */
export default class APIService {


  fetchDishes(keyword) {
    let { REACT_APP_FOOD_APP_KEY ,REACT_APP_FOOD_APP_ID} = process.env
    return Axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_key=${REACT_APP_FOOD_APP_KEY}&app_id=${REACT_APP_FOOD_APP_ID}&ingr=${keyword}`,{
      headers: {
        "Access-Control-Allow-Origin":"*"
      }
    });
  } 

  fetchRecipes(keyword) {
    let { REACT_APP_RECIPE_APP_KEY ,REACT_APP_RECIPE_APP_ID} = process.env
    return Axios.get(`https://api.edamam.com/search?app_key=${REACT_APP_RECIPE_APP_KEY}&app_id=${REACT_APP_RECIPE_APP_ID}&q=${keyword}`,{
      headers: {
        "Access-Control-Allow-Origin":"*"
      }
    })
  }
}