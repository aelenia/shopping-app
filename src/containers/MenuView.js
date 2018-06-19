import { connect } from 'react-redux'
import { toggleMenu, toggleSort, toggleFilter } from '../actions'
import MenuButton from '../components/MenuButton'

const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
  isSortVisible: state.isSortVisible,
  isFilterVisible: state.isFilterVisible,
})

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => dispatch(toggleMenu()),
  onSortClick: () => dispatch(toggleSort()),
  onFilterClick: () => dispatch(toggleFilter()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton)
