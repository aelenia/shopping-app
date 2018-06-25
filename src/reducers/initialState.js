import data from '../data'

export default {
  products: data,
  isMenuOpen: false,
  isSortVisible: false,
  isFilterVisible: false,
  ascendingSelected: false,
  descendingSelected: false,
  filtered: {
    Dresses: false,
    Shoes: false,
    Bags: false,
    isLiked: false,
  },
}
