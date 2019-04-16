import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'unify-react-mobile/build/Card'
import { css } from 'emotion'
import moment from 'moment'

const _productCard = css`
  margin: 0;
  font-size: 12px;
  .product-desc {
    padding: 8px;
    .product-title {
      margin: 8px 0;
    }
    .price-coret {
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.38);
      font-size: 10px;
      margin-bottom: 8px;
    }
    .price-awal {
      color: #fa591d;
      font-weight: bold;
      font-size: 14px;
    }
    .label-close {
      padding: 4px 8px;
      background-color: #ccebff;
      color: #009bff;
      font-size: 8px;
      border-radius: 8px;
      margin-bottom: 8px;
      font-weight: bold;
    }
    .label-open {
      padding: 4px 8px;
      background-color: #ffccd9;
      color: #ef144a;
      font-size: 8px;
      border-radius: 8px;
      margin-bottom: 8px;
      font-weight: bold;
    }
  }

  .mr-bottom {
    margin-bottom: 8px;
  }
`

class ProductCard extends Component {
  render() {
    const { data } = this.props
    const bidDiff = moment().diff(data.auction_end_at)
    const openBid = bidDiff < 1
    console.log(openBid)
    return(
      <Link to={'/detail-lelang/' + data.id}>
        <Card className={_productCard}  padding="0">
          <img src="https://picsum.photos/250/150/?random" width="100%" />
          {/* <img src={data.image} width="100%" /> */}
          <div className="product-desc">
            <div className="product-title">{data.name}</div>
            <div className="mr-bottom">
              { openBid &&
                <span className="label-open">Ajukan Lelang</span>
              }
              { !openBid &&
                <span className="label-close">Telah Ditawar</span>
              }
            </div>
            <div className="price-coret">Rp {data.price}</div>
            <div>{moment(data.auction_end_at).fromNow()}</div>
            <div>Mulai Dari</div>
            <div className="price-awal">Rp {data.bid_init_price}</div>
          </div>
        </Card>
      </Link>
    )
  }
}

ProductCard.defaultProps = {
  to: '/detail-lelang',
  data: {}
}

export default ProductCard