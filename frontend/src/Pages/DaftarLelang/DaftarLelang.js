import React, { Component } from 'react'
import ProductCard from './ProductCard'
import { css, cx } from 'emotion'
import NavBar from 'unify-react-mobile/build/NavBar'

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
        <NavBar inverted
          title="Text Goes Here"
          onBack="https://www.tokopedia.com"
        />
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