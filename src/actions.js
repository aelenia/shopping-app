import { createAction } from 'redux-actions'

const Actions = {
  TOGGLEMENU: 'TOGGLE_MENU',
  TOGGLESORT: 'TOGGLE_SORT',
  TOGGLEFILTER: 'TOGGLE_FILTER',
  TOGGLEASCENDING: 'TOGGLE_ASCENDING',
  TOGGLEDESCENDING: 'TOGGLE_DESCENDING',
  CHECK_FILTER: 'CHECK_FILTER',
}

export default Actions

export const toggleMenu = createAction(Actions.TOGGLE_MENU)
export const toggleSort = createAction(Actions.TOGGLE_SORT)
export const toggleFilter = createAction(Actions.TOGGLE_FILTER)
export const toggleAscending = createAction(Actions.TOGGLE_ASCENDING)
export const toggleDescending = createAction(Actions.TOGGLE_DESCENDING)
export const checkFilter = createAction(Actions.CHECK_FILTER)
