import React, { Component } from 'react'
import MenuView from '../containers/MenuView'

export default class Wishlist extends Component {
  bookmarked = products => {
    const { isBookmarked } = this.props

    return products.filter(product => {
      product.isBookmarked === true
    })
  }

  render() {
    return (
      <div>
        <Header />
        <MenuView />
        {this.bookmarked(this.props.products).map(product => (
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
