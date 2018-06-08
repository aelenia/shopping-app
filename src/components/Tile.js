import React, { Component } from 'react'
import { css } from 'emotion'

const infoStyle = css`
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.8) 30%,
    transparent
  );
  font-style: italic;
  margin-top: 94px;
  padding: 40px 10px 10px 10px;
`

const priceStyle = css`
  float: right;
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
          <div>
            <span>{description}</span>
            <span className={priceStyle}>{price}</span>
          </div>
        </div>
      </div>
    )
  }
}
