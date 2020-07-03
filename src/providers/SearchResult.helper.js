import {FILTER_TYPES} from '../+store/actions/actionTypes'


const filterByCarb = (list) => {
  return list.filter(el => {
    let carb = 0;
    let protien = 0;
    let fat = 0;
    if(el.food) {
      carb = el.food.nutrients.CHOCDF;
      protien = el.food.nutrients.PROCNT;
      fat = el.food.nutrients.FAT;
    }else {
      carb = el.recipe.totalDaily.CHOCDF.quantity;
      protien = el.recipe.totalDaily.PROCNT.quantity;
      fat = el.recipe.totalDaily.FAT.quantity;
    }
    let carbContent = (fat+carb)/(protien+carb+fat);
    console.log(carbContent)
    return carbContent> 50;
    
  })
}

const filterByProtien = (list) => {
  return list.filter(el => {
    let carb = 0;
    let protien = 0;
    let fat = 0;
    if(el.food) {
      carb = el.food.nutrients.CHOCDF;
      protien = el.food.nutrients.PROCNT;
      fat = el.food.nutrients.FAT;
    }else {
      carb = el.recipe.totalDaily.CHOCDF.quantity;
      protien = el.recipe.totalDaily.PROCNT.quantity;
      fat = el.recipe.totalDaily.FAT.quantity;
    }
    let protienContent = (protien)/(protien+carb+fat);
    return protienContent> 15;    
  })
}
const filterByBalance= (list) => {
  return list.filter(el => {
    let carb = 0;
    let protien = 0;
    let fat = 0;
    if(el.food) {
      carb = el.food.nutrients.CHOCDF;
      protien = el.food.nutrients.PROCNT;
      fat = el.food.nutrients.FAT;
    }else {
      carb = el.recipe.totalDaily.CHOCDF.quantity;
      protien = el.recipe.totalDaily.PROCNT.quantity;
      fat = el.recipe.totalDaily.FAT.quantity;
    }
    let protienContent = (protien)/(protien+carb+fat);
    console.log(protienContent)
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