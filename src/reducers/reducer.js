import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.TOGGLEMENU:
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case Actions.TOGGLESORT:
      return { ...state, isSortVisible: !state.isSortVisible }
    case Actions.TOGGLEFILTER:
      return { ...state, isFilterVisible: !state.isFilterVisible }
    default:
      return state
  }
}

// if ((isSortVisible = false)) {
//   className.toggle
// } else {
//   return state
// }
