import React from 'react'

const SearchBoxComponent = (searchFood) => {

  const SearchFood = (e) => {
    e.preventDefault();
    searchFood("Test")
  }
  return (
    <div>
      <form onSubmit={ (e) => SearchFood(e) }>
        <input type="text"/>
        <input type="submit"/>
      </form>
    </div>
  )
}
export default SearchBoxComponent