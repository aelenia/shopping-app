import React, { Component } from 'react'
import Header from './Header'
import Tile from './Tile'

export default class Wishlist extends Component {
  // liked(products) {
  //   return products.filter(product => {
  //     if (product.isLiked === true) {
  //       return product
  //     } else {
  //       return (
  //         <div>
  //           <p>You haven't liked any products yet</p>
  //           <button>Start shopping</button>
  //         </div>
  //       )
  //     }
  //   })
  // }

  liked = products => {
    return products.filter(product => {
      return product.isLiked
    })
  }

  // liked = products => {
  //   return products.filter(products.map(product => product.isLiked === true))
  // }

  render() {
    return (
      <div>
        <Header />
        <p>The things you like:</p>
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
