import {InitialState} from '../state'

const rootReducer =  (state =InitialState, actions) => {
  switch(actions.type) {
    case 'ADD_DISHES':
      return {
        ...state,
        dishes: [...actions.payload],
      }
    case 'ADD_RECIPES':
      return {
        ...state,
        recipes: [...actions.payload],
      }
    case 'toggleLoading':
      return {
        ...state,
        isLoading: !state.isLoading
      }
    default:
      return state
  }
}

export default rootReducer;