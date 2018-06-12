import { connect } from 'react-redux'
import { toggle } from '../actions'
import MenuButton from '../components/MenuButton'

const mapStateToProps = state => ({
  isDropdownOpen: state.isDropdownOpen,
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggle()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton)
