import React, { Component } from 'react'
import Header from '../components/Header'
import Tile from '../components/Tile'

export default class StartPage extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.products.map(product => (
          <Tile
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
            key={product.id}
            id={product.id}
          />
        ))}
      </div>
    )
  }
}