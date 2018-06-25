import { connect } from 'react-redux'
import { toggleLike } from '../actions'
import Heart from '../components/Heart'

const mapStateToProps = state => ({
  isLiked: state.isLiked,
})

const mapDispatchToProps = dispatch => ({
  onHeartClick: () => dispatch(toggleLike()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heart)
