import { connect } from 'react-redux'
import SearchBoxComponent from '../shared/SearchBox'
import actions from '../../+store/actions'
const mapDispatchToProps = dispatch => ({
  /**
   * TODO: Wire it with action!
   * 
   *  
   */  
  searchItem: keyword => dispatch(actions.searchItem(keyword))
})

export default connect(
  null,
  mapDispatchToProps
)(SearchBoxComponent)