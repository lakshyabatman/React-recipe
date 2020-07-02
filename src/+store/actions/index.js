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


export function searchItem(keyword) {
  return (dispatch) => {
    Promise.all(apiService.fetchDishes(keyword),apiService.fetchRecipes(keyword)).then(values=> {
      console.log(values)
      dispatch(GET_DISHES(values[0]))
      dispatch(GET_RECIPES(values[1]))
    }).catch((error) => {
      console.log(error);
      return;
    })

  }
}

