import { connect } from 'react-redux'
import Wishlist from '../components/Wishlist'

const mapStateToProps = state => ({
  products: state.products,
  ascendingSelected: state.ascendingSelected,
  descendingSelected: state.descendingSelected,
  filtered: state.filtered,
  isBookmarked: state.isBookmarked,
})

export default connect(mapStateToProps)(Wishlist)
