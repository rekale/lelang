import React, { Component } from 'react'
import ProductCard from './ProductCard'
import { css, cx } from 'emotion'

const _container = css`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  padding: 16px;
` 

const ProductFlex = ({ className, ...props}) => (
  <div className={cx(className, _container)}  {...props} />
)

class DaftarLelang extends Component {
  render() {
    return(
      <div>
        <h1>Daftar Lelang</h1>
        <ProductFlex>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductFlex>
      </div>
    )
  }
}

export default DaftarLelang