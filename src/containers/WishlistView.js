import { connect } from 'react-redux'
import Wishlist from '../components/Wishlist'

const mapStateToProps = state => ({
  products: state.products,
  isLiked: state.isLiked,
})

export default connect(mapStateToProps)(Wishlist)
