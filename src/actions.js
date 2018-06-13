import { createAction } from 'redux-actions'

const Actions = {
  TOGGLEMENU: 'TOGGLEMENU',
  TOGGLESORT: 'TOGGLESORT',
  TOGGLEFILTER: 'TOGGLEFILTER',
}

export default Actions

export const toggleMenu = createAction(Actions.TOGGLEMENU)
export const toggleSort = createAction(Actions.TOGGLESORT)
export const toggleFilter = createAction(Actions.TOGGLEFILTER)
