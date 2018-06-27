import React, { Component } from 'react'
import { css } from 'emotion'

const greyHeart = css`
  position: absolute;
  top: 3%;
  left: 84%;
  background: rgba(102, 102, 102, 0.6);
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 20px;
    top: 11px;
    width: 14px;
    height: 23px;
    background: white;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 6px;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`

const redHeart = css`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 89%;
    top: 23px;
    width: 22px;
    height: 35px;
    background: #ff2a17;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 83.5%;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`

export default class Heart extends Component {
  render() {
    const { onHeartClick, isLiked, id } = this.props

    return (
      <div
        onClick={e => onHeartClick(id)}
        isLiked={isLiked}
        className={isLiked ? redHeart : greyHeart}
      />
    )
  }
}
