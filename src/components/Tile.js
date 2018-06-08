import React, { Component } from 'react'
import { css } from 'emotion'

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
    const { title, description, price } = this.props

    const tileStyle = css`
      display: inline-block;
      background-image: url(${this.props.image});
      background-size: cover;
      background-repeat: none;
      border: 1px solid white;
      width: 49.4%;
      height: 180px;
      margin: 0;
      font-family: Helvetica Neue, sans-serif;
      color: '8e8e8e';
    `

    return (
      <div className={tileStyle}>
        <div className={infoStyle}>
          <div>{title}</div>
          <div className={flex}>
            <span>{description}</span>
            <span className={priceStyle}>{price}</span>
          </div>
        </div>
      </div>
    )
  }
}
