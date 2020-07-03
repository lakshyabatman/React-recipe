import { connect } from 'react-redux'
import SearchResultComponent from '../shared/SearchResult'
import {filterItems} from '../../providers/SearchResult.helper'
/**
 * TODO: This is wrapper which inject states as props, we probably need to add filter here! also we need to add filter options as state
 */


const mapStateToProps = state => ({
  data: filterItems(state,'')
})

export default connect(mapStateToProps,null)(SearchResultComponent)