import { createAction } from 'redux-actions'

const Actions = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  TOGGLE_SORT: 'TOGGLE_SORT',
  TOGGLE_FILTER: 'TOGGLE_FILTER',
}

export default Actions

export const toggleMenu = createAction(Actions.TOGGLE_MENU)
export const toggleSort = createAction(Actions.TOGGLE_SORT)
export const toggleFilter = createAction(Actions.TOGGLE_FILTER)
