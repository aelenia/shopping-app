import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.TOGGLEMENU:
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case Actions.TOGGLESORT:
      return { ...state, isSortVisible: !state.isSortVisible }
    case Actions.TOGGLEFILTER:
      return { ...state, isFilterVisible: !state.isFilterVisible }
    case Actions.TOGGLEASCENDING:
      return {
        ...state,
        ascendingSelected: !state.ascendingSelected,
        descendingSelected: false,
      }
    case Actions.TOGGLEDESCENDING:
      return {
        ...state,
        descendingSelected: !state.descendingSelected,
        ascendingSelected: false,
      }
    case Actions.CHECKFILTER:
      const checkedCategory = action.payload
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [checkedCategory]: !state.filtered[checkedCategory],
        },
      }
    case Actions.TOGGLELIKE:
      const index = state.products.findIndex(
        product => product.id === action.payload
      )
      const selectedProduct = state.products[index]

      return {
        ...state,
        products: [
          ...state.products.slice(0, index),
          { ...selectedProduct, isLiked: !selectedProduct.isLiked },
          ...state.products.slice(index + 1),
        ],
      }
    default:
      return state
  }
}
