import React from 'react'

const SearchBoxComponent = (props) => {

  const SearchFood = (e) => {
    e.preventDefault();
    props.searchItem('idli')
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