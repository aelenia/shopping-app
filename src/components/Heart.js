import React, { Component } from 'react'
import { css } from 'emotion'

const greyHeart = css`
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

const redHeart = css`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 90%;
    top: 20px;
    width: 22px;
    height: 35px;
    background: #ff2a17;
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
