import { connect } from 'react-redux'
import {FILTER} from '../../+store/actions'
import Filter from '../shared/Filters'
const mapDispatchToProps = dispatch => ({
  addFilter: filter => dispatch(FILTER(filter))
})

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)