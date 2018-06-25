import React, { Component } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'
import HeartView from '../containers/HeartView'
import Arrow from './Arrow'

const infoStyle = css`
  display: flex;
  flex-direction: column;
  padding: 5%;
  color: #333333;
`

const titleStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
  margin: 7% 0 10% 0;
`

const priceStyle = css`
  font-size: 0.8em;
`

const descriptionStyle = css`
  margin-bottom: 10%;
`

const availabilityStyle = css`
  margin-bottom: 10%;
  font-style: italic;
  color: red;
`

const buttonStyle = css`
  background: white;
  border: 1px solid #333333;
  border-radius: 20px;
  padding: 3% 0 3% 0;
  font-size: 1em;
`

export default class ProductPage extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    const {
      title,
      description,
      price,
      image,
      availability,
    } = this.props.product

    const imageStyle = css`
      background-image: url(${image});
      background-position: center;
      background-size: cover;
      background-repeat: none;
      width: 100%;
      height: 300px;
    `

    return (
      <div>
        <div className={imageStyle}>
          <Link to={`/`}>
            <Arrow />
          </Link>
          <HeartView />
        </div>
        <div className={infoStyle}>
          <div className={titleStyle}>
            <span>{title}</span>
            <span className={priceStyle}>{price} €</span>
          </div>
          <div className={descriptionStyle}>{description}</div>
          <div className={availabilityStyle}>{availability}</div>
          <button className={buttonStyle} disabled>
            Add to Cart
          </button>
        </div>
      </div>
    )
  }
}
