import React, { Component } from 'react'
import { css } from 'emotion'

const redHeart = css`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 62%;
    top: -32px;
    width: 19px;
    height: 30px;
    background: #ff2a17;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 56%;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`

export default class MiniHeart extends Component {
  render() {
    return <div className={redHeart} />
  }
}
