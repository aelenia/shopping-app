import React, { Component } from 'react'
import { css } from './base.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import StartPageView from './containers/StartPageView'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StartPageView />
      </Provider>
    )
  }
}

export default App
