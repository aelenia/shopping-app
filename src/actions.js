import { createAction } from 'redux-actions'

const Actions = {
  TOGGLE: 'TOGGLE',
}

export default Actions

export const toggle = createAction(Actions.TOGGLE)
