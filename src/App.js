import React, { Component } from 'react'
import { css } from 'emotion'
import Header from './components/Header'
import Tile from './components/Tile'
import Data from './data.js'

const styles = css`
  width: 100%;
`

class App extends Component {
  state = {
    products: Data,
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.products.map(product => (
          <Tile
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    )
  }
}

export default App
