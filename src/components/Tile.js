import React, { Component } from 'react'
import { css } from 'emotion'

const tileStyle = css`
  background: lightgray;
  border: 1px solid red;
  width: 50%;
  height: 180px;
  color: white;
`

export default class Tile extends Component {
  render() {
    const { title, description, price } = this.props

    return (
      <div className={tileStyle}>
        {title}
        {description}
        {price}
      </div>
    )
  }
}
