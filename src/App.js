import React, { Component } from 'react'
import { css } from 'emotion'
import Header from './components/Header'
import Tile from './components/Tile'

const styles = css`
  width: 100%;
`

class App extends Component {
  state = {
    products: [
      {
        title: 'Flowers',
        description: 'Dress',
        price: '159€',
        image: './img/dress1.jpg',
      },
      {
        title: 'Black & White',
        description: 'Bag',
        price: '349€',
        image: './img/bag1.jpg',
      },
      {
        title: 'Striped',
        description: 'Dress',
        price: '200€',
        image: './img/dress2.jpg',
      },
      {
        title: 'Taupe',
        description: 'Shoes',
        price: '129€',
        image: './img/shoes4.jpg',
      },
      {
        title: 'Backpack',
        description: 'Bag',
        price: '279€',
        image: './img/bag2.jpg',
      },
      {
        title: 'Beige Boots',
        description: 'Shoes',
        price: '139€',
        image: './img/shoes1.jpg',
      },
      {
        title: 'Blue Boots',
        description: 'Shoes',
        price: '169€',
        image: './img/shoes3.jpg',
      },
      {
        title: 'Black',
        description: 'Dress',
        price: '99€',
        image: './img/dress4.jpg',
      },
      {
        title: 'Red Heels',
        description: 'Shoes',
        price: '149€',
        image: './img/shoes2.jpg',
      },
      {
        title: 'Sparkling',
        description: 'Dress',
        price: '249€',
        image: './img/dress3.jpg',
      },
      {
        title: 'Colorful',
        description: 'Bag',
        price: '359€',
        image: './img/bag3.jpg',
      },
      {
        title: 'Blue',
        description: 'Shoes',
        price: '59€',
        image: './img/shoes5.jpg',
      },
    ],
  }

  render() {
    return (
      <div className={styles}>
        <Header />
        {this.state.products.map(product => (
          <Tile
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    )
  }

  // renderAllProducts() {
  //   return this.state.products.map(product =>
  //     this.renderProduct(product.title, product.description, product.price)
  //   )
  // }

  // renderProduct(title, description, price) {
  //   return (
  //     <Tile>
  //       title={title} description={description} price={price}
  //     </Tile>
  //   )
  // }
}

export default App
