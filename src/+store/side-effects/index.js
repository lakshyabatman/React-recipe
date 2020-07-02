import Axios from 'axios'

/**
 * @description: API SERVICE CLASS, used as sideeffects by actions.
 * 
 */
export default class APIService {


  fetchDishes(keyword) {
    let { REACT_APP_APP_KEY ,REACT_APP_APP_ID} = process.env
    return Axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_key=${REACT_APP_APP_KEY}&app_id=${REACT_APP_APP_ID}&ingr=${keyword}`);
  } 

  fetchRecipes(keyword) {
    return this._httpClient.get('<URL>')
  }
}