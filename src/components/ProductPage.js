import React, { Component } from 'react'
import { css } from 'emotion'

export default class ProductPage extends Component {
  render() {
    const { title, description, price, image } = this.props

    const image = css`
      background-image: url(${this.props.image});
      background-size: cover;
      background-repeat: none;
      width: 100%;
      height: 300px;
    `

    return (
      <div>
        <div className={image}>Arrow</div>
        <div>
          {title}
          {description}
          {price}
        </div>
      </div>
    )
  }
}
