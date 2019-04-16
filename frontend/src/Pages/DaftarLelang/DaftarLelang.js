import React, { Component } from 'react'
import ProductCard from './ProductCard'
import { css, cx } from 'emotion'
import NavBar from 'unify-react-mobile/build/NavBar'
import axios from 'axios'

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
  state = {
    payload: [],
    loading: false,
    error: null
  }

  componentWillMount() {
    this.getProductList()
  }

  getProductList = () => {
    this.setState({loading: true})
    axios.get('http://localhost:8000/products/')
    .then(res => {
      this.setState({
        payload: res.data.results,
        loading: false
      })
    })
    .catch(ex => {
      this.setState({
        loading: false,
        error: ex
      })
    })
  }
  render() {
    const { payload } = this.state
    return(
      <div>
        <NavBar inverted
          title="Penawaran Bulan Ini"
          onBack="https://www.tokopedia.com"
        />
        <ProductFlex>
          { payload.map((x,i) => (
            <ProductCard key={i} data={x}/>
          ))}
        </ProductFlex>
      </div>
    )
  }
}

export default DaftarLelang