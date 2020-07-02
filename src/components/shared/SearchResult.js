import React from 'react';
import SearchSlider from '../shared/CardSlider'

const SearchResult = () => {
    let dishes = ["hi,","dvfd","Fd","Fd"]
    return (
      <div>
        <SearchSlider payload={dishes}/>
        <SearchSlider payload={dishes}/>
      </div>
    )
  
}
export default SearchResult