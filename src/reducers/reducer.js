import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.TOGGLE:
      return { ...state, isDropdownOpen: !state.isDropdownOpen }
    default:
      return state
  }
}
