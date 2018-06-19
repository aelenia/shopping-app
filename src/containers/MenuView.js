import { connect } from 'react-redux'
import {
  toggleMenu,
  toggleSort,
  toggleFilter,
  toggleAscending,
  toggleDescending,
  checkFilter,
} from '../actions'
import MenuButton from '../components/MenuButton'

const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
  isSortVisible: state.isSortVisible,
  isFilterVisible: state.isFilterVisible,
  ascendingSelected: state.ascendingSelected,
  descendingSelected: state.descendingSelected,
  filtered: state.filtered,
})

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => dispatch(toggleMenu()),
  onSortClick: () => dispatch(toggleSort()),
  onFilterClick: () => dispatch(toggleFilter()),
  onAscendingSelected: () => dispatch(toggleAscending()),
  onDescendingSelected: () => dispatch(toggleDescending()),
  onFilterSelect: filterName => dispatch(checkFilter(filterName)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton)
