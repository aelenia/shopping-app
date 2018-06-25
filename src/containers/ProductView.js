import { connect } from 'react-redux'
import { toggleLike } from '../actions'
import ProductPage from '../components/ProductPage'

const mapStateToProps = (state, ownProps) => ({
  product: state.products.find(
    product => product.id === ownProps.match.params.id
  ),
  isBookmarked: state.isLiked,
})

const mapDispatchToProps = dispatch => ({
  onHeartClick: () => dispatch(toggleLike()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage)
