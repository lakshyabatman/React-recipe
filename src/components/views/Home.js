import React from 'react'
import NavBar from '../shared/NavBar'
import SearchBox from '../containers/SearchBox'
import SearchResult from '../shared/SearchResult'
const HomePage = () => {
  return (
    <div>
      
       <NavBar/>
       <SearchBox/>
       <SearchResult/>
       {
         /**
          * TODO: Build following components!
          */
       }
       {/* <SearchBox/>
       <Filters/>
       <SearchResults/> */}

    </div>
  )
}

export default HomePage