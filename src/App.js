import React, { Component } from 'react'
import { css } from './base.css'
import Header from './components/Header'
import Tile from './components/Tile'
import data from './data.js'

class App extends Component {
  state = {
    products: data,
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
            key={product.id}
          />
        ))}
      </div>
    )
  }
}

export default App
