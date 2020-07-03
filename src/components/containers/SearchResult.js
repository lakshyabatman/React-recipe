import { connect } from 'react-redux'
import SearchResultComponent from '../shared/SearchResult'
import {filterItems} from '../../providers/SearchResult.helper'

 /**
  * 
  * @param {*} state 
  * @description: Change in state.filter_type will be handlerd here!
  */

const mapStateToProps = state => ({
  data: filterItems(state,state.filter_type)
})

export default connect(mapStateToProps,null)(SearchResultComponent)