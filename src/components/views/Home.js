import React from 'react'
import NavBar from '../shared/NavBar'
import SearchBox from '../containers/SearchBox'
import SearchResult from '../containers/SearchResult'
const HomePage = () => {
  return (
    <div>   
       <NavBar/>
       <SearchBox/>
       <SearchResult/>
    </div>
  )
}

export default HomePage