import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import Burger from './Burger'

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
  width: 200px;
`

const hidden = css`
  display: none;
`

const StyledDropdownItem = styled(DropdownItem)`
  &:hover,
  &:focus,
  &:active {
    background: white;
    color: black;
    outline: none;
  }
`

const StyledInput = styled('input')`
  margin-right: 10%;
  vertical-align: middle;
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
        <StyledDropdownToggle onClick={onMenuClick}>
          <Burger />
        </StyledDropdownToggle>
        <StyledDropdownMenu right>
          <StyledDropdownItem>
            <div onClick={onSortClick}>Sort</div>
            <div
              isSortVisible={isSortVisible}
              className={isSortVisible ? '' : hidden}
            >
              <StyledDropdownItem>Price ascending</StyledDropdownItem>
              <StyledDropdownItem>Price descending</StyledDropdownItem>
            </div>
          </StyledDropdownItem>
          <DropdownItem divider />
          <StyledDropdownItem>
            <div onClick={onFilterClick}>Filter</div>
            <div
              isFilterVisible={isFilterVisible}
              className={isFilterVisible ? '' : hidden}
            >
              <StyledDropdownItem>
                <label>
                  <StyledInput type="checkbox" />Dresses
                </label>
              </StyledDropdownItem>
              <StyledDropdownItem>
                <label>
                  <StyledInput type="checkbox" />Shoes
                </label>
              </StyledDropdownItem>
              <StyledDropdownItem>
                <label>
                  <StyledInput type="checkbox" />Bags
                </label>
              </StyledDropdownItem>
            </div>
          </StyledDropdownItem>
        </StyledDropdownMenu>
      </ButtonDropdown>
    )
  }
}

function noFunc() {}
