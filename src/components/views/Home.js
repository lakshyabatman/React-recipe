import React from 'react'
import NavBar from '../shared/NavBar'
import SearchBox from '../containers/SearchBox'
import SearchResult from '../containers/SearchResult'
import Filter from '../containers/Filters'
const HomePage = () => {
  return (
    <div>   
       <NavBar/>
       <SearchBox/>
       <Filter/>
       <SearchResult/>
    </div>
  )
}

export default HomePage