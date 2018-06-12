import { createAction } from 'redux-actions'

const Actions = {
  TILE_CLICK: 'TILE_CLICK',
}

export default Actions

export const onTileClick = createAction(Actions.TILE_CLICK)
