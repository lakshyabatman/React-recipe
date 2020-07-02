import Axios from 'axios'


/**
 * @description: API SERVICE CLASS, used as sideeffects by actions.
 * 
 */
export class APIService {

  constructor() {
    this._httpClient = Axios.create({

    })
  }
  fetchDishes(keyword) {
    return this._httpClient.get('<URL>');
  } 

  fetchRecipes(keyword) {
    return this._httpClient.get('<URL>')
  }
}