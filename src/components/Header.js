import React, { Component } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

const headerstyles = css`
  height: 10vh;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Sriracha', sans-serif;
  background: white;
  color: #25eaed;

  &:focus,
  &:active {
    text-decoration: none;
    outline: none;
  }
`

export default class Header extends Component {
  render() {
    return (
      <Link to={'/'}>
        <div className={headerstyles}>
          <h1>shop!</h1>
        </div>
      </Link>
    )
  }
}
