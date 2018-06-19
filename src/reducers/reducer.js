import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case Actions.TOGGLE_SORT:
      return { ...state, isSortVisible: !state.isSortVisible }
    case Actions.TOGGLE_FILTER:
      return { ...state, isFilterVisible: !state.isFilterVisible }
    default:
      return state
  }
}
