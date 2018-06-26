import React, { Component } from 'react'
import { css } from 'emotion'

const redHeart = css`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 42%;
    top: -23px;
    width: 14px;
    height: 22px;
    background: #999999;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 32.5%;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`

export default class MiniHeart extends Component {
  render() {
    return <div className={redHeart} />
  }
}
