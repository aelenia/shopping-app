import React, { Component } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

const svgStyle = css`
  position: absolute;
  top: 3%;
  left: 5%;
  width: 32px;
  height: 32px;
  background: rgba(102, 102, 102, 0.6);
  border-radius: 50%;
  padding: 1%;
`

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
  color: darkred;
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
            <svg
              fill={'white'}
              className={svgStyle}
              enable-background="new 0 0 96 96"
              height="96px"
              id="arrow_left"
              version="1.1"
              viewBox="0 0 96 96"
              width="96px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M84,44H21.656l21.456-21.456c1.562-1.562,1.562-4.095,0.001-5.657c-1.562-1.562-4.096-1.562-5.658,0L9.172,45.171l0,0  c-0.186,0.186-0.352,0.391-0.498,0.61c-0.067,0.101-0.114,0.21-0.171,0.315c-0.067,0.124-0.142,0.242-0.196,0.373  c-0.056,0.135-0.088,0.276-0.129,0.416c-0.032,0.111-0.075,0.217-0.098,0.331C8.028,47.475,8,47.737,8,48l0,0  c0,0.003,0.001,0.005,0.001,0.008c0,0.259,0.027,0.519,0.078,0.774c0.024,0.121,0.069,0.232,0.104,0.349  c0.039,0.133,0.07,0.268,0.123,0.397c0.058,0.139,0.136,0.265,0.208,0.396c0.054,0.098,0.096,0.198,0.159,0.292  c0.147,0.221,0.314,0.427,0.501,0.614l28.282,28.281c1.562,1.562,4.095,1.562,5.657,0.001c1.562-1.562,1.562-4.096,0-5.658  L21.657,52H84c2.209,0,4-1.791,4-4S86.209,44,84,44z" />
            </svg>
          </Link>
        </div>
        <div className={infoStyle}>
          <div className={titleStyle}>
            <span>{title}</span>
            <span className={priceStyle}>{price}</span>
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
