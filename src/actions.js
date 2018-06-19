import { createAction } from 'redux-actions'

const Actions = {
  TOGGLEMENU: 'TOGGLEMENU',
  TOGGLESORT: 'TOGGLESORT',
  TOGGLEFILTER: 'TOGGLEFILTER',
  TOGGLEASCENDING: 'TOGGLEASCENDING',
  TOGGLEDESCENDING: 'TOGGLEDESCENDING',
  CHECKFILTER: 'CHECKFILTER',
}

export default Actions

export const toggleMenu = createAction(Actions.TOGGLEMENU)
export const toggleSort = createAction(Actions.TOGGLESORT)
export const toggleFilter = createAction(Actions.TOGGLEFILTER)
export const toggleAscending = createAction(Actions.TOGGLEASCENDING)
export const toggleDescending = createAction(Actions.TOGGLEDESCENDING)
export const checkFilter = createAction(Actions.CHECKFILTER)
