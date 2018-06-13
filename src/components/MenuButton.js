import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from 'reactstrap'

const StyledDropdownToggle = styled(DropdownToggle)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #25eaed;
  color: white;
  border: none;
  border-radius: 50% !important;
  font-size: 2em;
  height: 60px;
  padding: 0;
  width: 60px;

  &:active,
  &:hover {
    background: #93ff0d !important;
    box-shadow: none;
  }
`

const StyledDropdownMenu = styled(DropdownMenu)`
  margin-bottom: 5px;
`

export default class MenuButton extends Component {
  render() {
    const {
      onMenuClick,
      onSortClick,
      onFilterClick,
      isMenuOpen,
      isSortVisible,
      isFilterVisible,
    } = this.props
    return (
      <ButtonDropdown
        isOpen={isMenuOpen}
        direction="down"
        toggle={noFunc}
        className={css`
          position: fixed;
          top: 80vh;
          right: 5%;
        `}
      >
        <StyledDropdownToggle onClick={e => onMenuClick()}>
          <svg
            height="32px"
            version="1.1"
            viewBox="0 0 25 25"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsSketch="http://www.bohemiancoding.com/sketch/ns"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title />
            <desc />
            <defs />
            <g
              fill="none"
              fill-rule="evenodd"
              id="TabBar-Icons"
              stroke="none"
              stroke-width="1"
            >
              <g fill={'white'} id="Hamburger-Round">
                <path
                  d="M0,4 C0,2.8954305 0.889763236,2 2.00359486,2 L22.9964051,2 C24.10296,2 25,2.88772964 25,4 C25,5.1045695 24.1102368,6 22.9964051,6 L2.00359486,6 C0.897039974,6 0,5.11227036 0,4 L0,4 Z M0,12 C0,10.8954305 0.889763236,10 2.00359486,10 L22.9964051,10 C24.10296,10 25,10.8877296 25,12 C25,13.1045695 24.1102368,14 22.9964051,14 L2.00359486,14 C0.897039974,14 0,13.1122704 0,12 L0,12 Z M0,20 C0,18.8954305 0.889763236,18 2.00359486,18 L22.9964051,18 C24.10296,18 25,18.8877296 25,20 C25,21.1045695 24.1102368,22 22.9964051,22 L2.00359486,22 C0.897039974,22 0,21.1122704 0,20 L0,20 Z"
                  id="Hamburger"
                />
              </g>
            </g>
          </svg>
        </StyledDropdownToggle>
        <StyledDropdownMenu right>
          <DropdownItem toggle={noFunc} onClick={e => onSortClick()}>
            <div>Sort</div>
            <div isVisible={isSortVisible}>
              <DropdownItem>Price ascending</DropdownItem>
              <DropdownItem>Price descending</DropdownItem>
            </div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem toggle={noFunc} onClick={e => onFilterClick()}>
            <div>Filter</div>
            <div isVisible={isFilterVisible}>
              <DropdownItem>Dresses</DropdownItem>
              <DropdownItem>Shoes</DropdownItem>
              <DropdownItem>Bags</DropdownItem>
            </div>
          </DropdownItem>
        </StyledDropdownMenu>
      </ButtonDropdown>
    )
  }
}

function noFunc() {}