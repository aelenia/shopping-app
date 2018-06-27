import React, { Component } from 'react'
import Header from './Header'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import Tile from './Tile'
import MiniHeart from './MiniHeart'

const StyledHeadline = styled('div')`
  font-size: 1.3em;
  margin: 10% 8% 20% 8%;
  text-align: center;
`

const StyledDiv = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 25% 8% 8% 8%;
`

const StyledButton = styled('button')`
  background: white;
  border: 1px solid #333333;
  border-radius: 20px;
  font-size: 1em;
  padding: 3% 0 3% 0;
  margin-top: 8%;
  width: 250px;
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
        <StyledHeadline>
          The things you liked <MiniHeart />
        </StyledHeadline>
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
          <StyledDiv>
            <p>You haven't liked any products yet</p>
            <Link to={'/'}>
              <StyledButton>Start shopping</StyledButton>
            </Link>
          </StyledDiv>
        )}
      </div>
    )
  }
}
