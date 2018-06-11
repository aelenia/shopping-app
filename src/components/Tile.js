import React, { Component } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

const infoStyle = css`
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.8) 30%,
    transparent
  );
  font-style: italic;
  margin-top: 51%;
  padding: 40px 10px 10px 10px;
`

const flex = css`
  display: flex;
  justify-content: space-between;
`

const priceStyle = css`
  font-style: normal;
`

export default class Tile extends Component {
  render() {
    const { title, type, price, id, image } = this.props

    const tileStyle = css`
      display: inline-block;
      background-image: url(${image});
      background-size: cover;
      background-repeat: none;
      border: 1px solid white;
      width: 50%;
      height: 180px;
      color: #333333;
    `

    return (
      <Link key={id} to={`/product/${id}`}>
        <div className={tileStyle}>
          <div className={infoStyle}>
            <div>{title}</div>
            <div className={flex}>
              <span>{type}</span>
              <span className={priceStyle}>{price}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
