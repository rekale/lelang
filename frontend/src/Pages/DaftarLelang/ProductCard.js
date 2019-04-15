import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'unify-react-mobile/build/Card'
import { css } from 'emotion'

const _productCard = css`
  margin: 0;
  .product-desc {
    padding: 8px;
  }
`

class ProductCard extends Component {
  render() {
    return(
      <Link to={this.props.to}>
        <Card className={_productCard}  padding="0">
          <img src="https://picsum.photos/250/150/?random" width="100%" />
          <div className="product-desc">
            <p>Title</p>
            <p>Harga coret</p>
            <p>Harga awal</p>
          </div>
        </Card>
      </Link>
    )
  }
}

ProductCard.defaultProps = {
  to: '/detail-lelang'
}

export default ProductCard