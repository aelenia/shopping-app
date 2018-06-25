import React, { Component } from 'react'
import { css } from 'emotion'

const heart = css`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 90%;
    top: 20px;
    width: 22px;
    height: 35px;
    background: #999999;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 84.5%;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`

export default class Heart extends Component {
  render() {
    return <div className={heart} />
  }
}
