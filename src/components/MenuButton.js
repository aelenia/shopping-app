import React, { Component } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'
import Burger from './Burger'
import MenuHeart from './MenuHeart'

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

const StyledLink = styled(Link)`
  color: black;
`

const StyledDiv = styled('div')`
  margin-left: 12%;
`

export default class MenuButton extends Component {
  render() {
    const {
      onMenuClick,
      onSortClick,
      onFilterClick,
      onFilterSelect,
      onAscendingSelected,
      onDescendingSelected,
      isMenuOpen,
      isSortVisible,
      isFilterVisible,
      filtered,
    } = this.props

    return (
      <ButtonDropdown
        isOpen={isMenuOpen}
        direction="down"
        toggle={noFunc}
        className={css`
          position: fixed;
          bottom: 5vh;
          left: 75%;
        `}
      >
        <StyledDropdownToggle onClick={onMenuClick}>
          <Burger />
        </StyledDropdownToggle>
        <StyledDropdownMenu right>
          <StyledDropdownItem>
            <StyledLink to={`/wishlist`}>
              Likes <MenuHeart />
            </StyledLink>
          </StyledDropdownItem>
          <DropdownItem divider />
          <StyledDiv>
            <div onClick={onSortClick}>Sort</div>
            <div className={isSortVisible ? '' : hidden}>
              <StyledDropdownItem onClick={onAscendingSelected}>
                Price ascending
              </StyledDropdownItem>
              <StyledDropdownItem onClick={onDescendingSelected}>
                Price descending
              </StyledDropdownItem>
            </div>
          </StyledDiv>
          <DropdownItem divider />
          <StyledDiv>
            <div onClick={onFilterClick}>Filter</div>
            <div className={isFilterVisible ? '' : hidden}>
              {Object.keys(filtered).map(filterName => {
                const filterValue = filtered[filterName]
                return (
                  <StyledDropdownItem key={filterName}>
                    <label>
                      <StyledInput
                        onClick={e => onFilterSelect(filterName)}
                        type="checkbox"
                        checked={filterValue}
                      />
                      {filterName}
                    </label>
                  </StyledDropdownItem>
                )
              })}
            </div>
          </StyledDiv>
        </StyledDropdownMenu>
      </ButtonDropdown>
    )
  }
}

function noFunc() {}
