import React, { Component } from 'react'
import Header from './Header'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import Tile from './Tile'
import MiniHeart from './MiniHeart'

const StyledDiv = styled('div')`
  font-size: 1.3em;
  margin: 8%;
`

export default class Wishlist extends Component {
  liked = () => {
    return this.props.products.filter(product => {
      return product.isLiked
    })
  }

  render() {
    const likedProducts = this.liked()
    return (
      <div>
        <Header />
        <StyledDiv>
          The things you like <MiniHeart />
        </StyledDiv>
        {likedProducts.length ? (
          likedProducts.map(product => (
            <Tile
              title={product.title}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
              key={product.id}
              id={product.id}
            />
          ))
        ) : (
          <div>
            <p>You haven't liked any products yet</p>
            <Link to={'/'}>
              <button>Start shopping</button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}
