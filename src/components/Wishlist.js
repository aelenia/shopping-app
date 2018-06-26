import React, { Component } from 'react'
import Header from './Header'
import styled from 'react-emotion'
import Tile from './Tile'
import MiniHeart from './MiniHeart'

const StyledP = styled('p')`
  font-size: 1.3em;
  margin: 8%;
`

export default class Wishlist extends Component {
  liked = products => {
    return products.filter(product => {
      return product.isLiked
    })
  }

  render() {
    return (
      <div>
        <Header />
        <StyledP>
          The things you like <MiniHeart />
        </StyledP>
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
