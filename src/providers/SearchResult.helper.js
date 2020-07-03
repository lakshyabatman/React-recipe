import {FILTER_TYPES} from '../+store/actions/actionTypes'


const filterByCarb = (list) => {
  return list.filter(el => {
    if(el.nutrients) {
      var {carb, protien,fat} = el.nutrients;
    }else {
      // eslint-disable-next-line no-redeclare
      var {carb, protien,fat} = el.totalNutrients;
    }
    let carbContent = (fat+carb)/(protien+carb+fat);
    return carbContent> 50;
    
  })
}

const filterByProtien = (list) => {
  return list.filter(el => {
    if(el.nutrients) {
      var {carb, protien,fat} = el.nutrients;
    }else {
      // eslint-disable-next-line no-redeclare
      var {carb, protien,fat} = el.totalNutrients;
    }
    let protienContent = (protien)/(protien+carb+fat);
    return protienContent> 15;
    
  })
}

const filterByBalance= (list) => {
  return list.filter(el => {
    if(el.nutrients) {
      var {carb, protien,fat} = el.nutrients;
    }else {
      // eslint-disable-next-line no-redeclare
      var {carb, protien,fat} = el.totalNutrients;
    }
    let protienContent = (protien)/(protien+carb+fat);
    return protienContent>=12 && protienContent <=15;
    
  })
}


export const filterItems = (state, filter) => {
  switch (filter) {
    case FILTER_TYPES.HIGH_CARB:
      return {dishes: filterByCarb(state.dishes), recipes: filterByCarb(state.recipes) }  
    case FILTER_TYPES.HIGH_PROTIEN:
      return {dishes: filterByProtien(state.dishes), recipes: filterByProtien(state.recipes) }  
    case FILTER_TYPES.BALANCED:
      return {dishes: filterByBalance(state.dishes), recipes: filterByBalance(state.recipes) }  
    default:
      return state;
  }
}