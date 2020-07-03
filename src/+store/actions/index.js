import APIService from '../side-effects'
const apiService = new APIService()

export const GET_DISHES = (payload) => {
  return {
    type:'ADD_DISHES',
    payload
  }
}

export const GET_RECIPES = (payload) => {
  return {
    type:'ADD_RECIPES',
    payload
  }
}

export const FILTER = (payload) => {
  return {
    type:'ADD_FILTER',
    payload
  }
}

export function searchItem(keyword) {
  return (dispatch) => {
    Promise.all([apiService.fetchDishes(keyword),apiService.fetchRecipes(keyword)]).then(([respDishes,respRecipes]) => {
    dispatch(GET_DISHES(respDishes.data['hints']))
    dispatch(GET_RECIPES(respRecipes.data['hits']))
    }).catch((error) => {
      console.log(error);
      return;
    })

  }
}

