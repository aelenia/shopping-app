import React, { Component } from 'react'
import Header from '../components/Header'
import Tile from '../components/Tile'
import MenuView from '../containers/MenuView'

export default class StartPage extends Component {
  sort(products) {
    const { ascendingSelected, descendingSelected } = this.props
    if (ascendingSelected === true) {
      return [...products].sort((a, b) => a.price - b.price)
    } else if (descendingSelected === true) {
      return [...products].sort((a, b) => b.price - a.price)
    } else {
      return products
    }
  }

  filter = products => {
    const { filtered } = this.props

    return products.filter(product => {
      const allFiltersFalse = Object.keys(filtered).every(filterName => {
        const filterValue = filtered[filterName]
        return filterValue === false
      })

      return allFiltersFalse
        ? products
        : Object.keys(filtered).some(filterName => {
            const filterValue = filtered[filterName]
            return filterValue && product.category === filterName
          })
    })
  }

  filterAndSort = products => {
    const filtered = this.filter(products)
    return this.sort(filtered)
  }

  render() {
    return (
      <div>
        <Header />
        <MenuView />
        {this.filterAndSort(this.props.products).map(product => (
          <Tile
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
            key={product.id}
            id={product.id}
          />
        ))}
      </div>
    )
  }
}
