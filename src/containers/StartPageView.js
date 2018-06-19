import { connect } from 'react-redux'
import StartPage from '../components/StartPage'

const mapStateToProps = state => ({
  products: state.products,
  ascendingSelected: state.ascendingSelected,
  descendingSelected: state.descendingSelected,
  filtered: state.filtered,
})

export default connect(mapStateToProps)(StartPage)
