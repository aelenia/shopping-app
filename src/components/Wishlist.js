import React, { Component } from 'react'
import Header from './Header'
import Tile from './Tile'

export default class Wishlist extends Component {
  liked = products => {
    const { isLiked } = this.props

    return products.filter(isLiked === true)
  }

  render() {
    return (
      <div>
        <Header />
        {this.liked(this.props.products).map(product => (
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
