import React, { Component } from 'react'
import { css } from './base.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import StartPageView from './containers/StartPageView'
import ProductView from './containers/ProductView'
import ScrollToTop from './components/ScrollToTop'
import WishlistView from './containers/WishlistView'

const store = createStore(
  reducer,
  setupState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function setupState() {
  const state = localStorage.getItem('state')
  if (state) {
    return JSON.parse(state)
  } else {
    localStorage.setItem('state', JSON.stringify(initialState))
    return initialState
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <div>
              <Route exact path="/" component={StartPageView} />
              <Route path={`/product/:id`} component={ProductView} />
              <Route path={`/wishlist`} component={WishlistView} />
            </div>
          </ScrollToTop>
        </Router>
      </Provider>
    )
  }
}

export default App
