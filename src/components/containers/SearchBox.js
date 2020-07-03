import { connect } from 'react-redux'
import SearchBoxComponent from '../shared/SearchBox'
import {searchItem} from '../../+store/actions'
const mapDispatchToProps = dispatch => ({
  searchItem: keyword => dispatch(searchItem(keyword))
})

export default connect(
  null,
  mapDispatchToProps
)(SearchBoxComponent)