import React, { Component } from 'react'
import ProductCard from './ProductCard'
import { css, cx } from 'emotion'
import NavBar from 'unify-react-mobile/build/NavBar'
import axios from 'axios'

const getPL = () => {
  axios.get('http://localhost:8000/products/')
    .then(res => {
      console.log(res)
    })
}

const getProductList = () => ({
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
      {
          "id": 2,
          "name": "Redmi Note 7",
          "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "price": 4600000,
          "bid_init_price": 50000,
          "bid_current_price": 0,
          "image": "http://localhost:8000/media/products/Screen_Shot_2019-04-08_at_2.00.55_PM.png"
      },
      {
          "id": 1,
          "name": "test",
          "desc": "test",
          "price": 100,
          "bid_init_price": 10,
          "bid_current_price": 0,
          "image": "http://localhost:8000/media/products/Screen_Shot_2019-04-10_at_10.19.03_AM.png"
      },
      {
          "id": 2,
          "name": "Redmi Note 7",
          "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "price": 4600000,
          "bid_init_price": 50000,
          "bid_current_price": 0,
          "image": "http://localhost:8000/media/products/Screen_Shot_2019-04-08_at_2.00.55_PM.png"
      },
      {
          "id": 1,
          "name": "test",
          "desc": "test",
          "price": 100,
          "bid_init_price": 10,
          "bid_current_price": 0,
          "image": "http://localhost:8000/media/products/Screen_Shot_2019-04-10_at_10.19.03_AM.png"
      }
  ]
})

const _container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  padding: 16px;
  max-width: 360px;
  margin: 0 auto;
` 

const ProductFlex = ({ className, ...props}) => (
  <div className={cx(className, _container)}  {...props} />
)

class DaftarLelang extends Component {
  render() {
    getPL()
    const productListData = getProductList().results
    return(
      <div>
        <NavBar inverted
          title="Text Goes Here"
          onBack="https://www.tokopedia.com"
        />
        <ProductFlex>
          { productListData.map((x,i) => (
            <ProductCard key={i} data={x}/>
          ))}
        </ProductFlex>
      </div>
    )
  }
}

export default DaftarLelang