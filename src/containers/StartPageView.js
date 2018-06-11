import { connect } from 'react-redux'
import StartPage from '../components/StartPage'

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(mapStateToProps)(StartPage)
