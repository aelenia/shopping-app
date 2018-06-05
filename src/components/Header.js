import React, { Component } from 'react'
import { css } from 'emotion'

const headerstyles = css`
  height: 10vh;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Sriracha', sans-serif;
  background: white;
  color: #25eaed;
`

export default class Header extends Component {
  render() {
    return (
      <div className={headerstyles}>
        <h1>shop!</h1>
      </div>
    )
  }
}