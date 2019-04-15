import React, { Component } from 'react'
import { css } from 'emotion'
import NavBar from 'unify-react-mobile/build/NavBar'
import Button from 'unify-react-mobile/build/Button'


const getProductDetail = () => ({
  "id": 2,
  "name": "Redmi Note 7",
  "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "price": 4600000,
  "bid_init_price": 50000,
  "bid_current_price": 0,
  "image": "http://localhost:8000/media/products/Screen_Shot_2019-04-08_at_2.00.55_PM.png"
})

const _detailLelang = css`
  display: flex;
  flex-direction: column;
  .product-nav-bar {
    position: sticky;
    top: 0;
  }
  .product-desc {
    padding: 0 16px 16px;
  }
  .flex {
    display: flex;
    &.space-between {
      justify-content: space-between;
    }
  }
  .horizontal-line {
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin: 8px;
  }
`

class DetailLelang extends Component {
  render() {
    const data = getProductDetail()
    return(
      <div className={_detailLelang}>
        <div className="product-nav-bar">
          <NavBar inverted
            title="Text Goes Here"
            onBack="/daftar-lelang"
          />
        </div>
        <img src="https://picsum.photos/300/300/?random" />
        
        <div className="product-desc">
          <div>
            <div>berlaku hingga</div>
          </div>
          <div>{data.name}</div>
          <div className="flex">
            <div>ajukan lelang</div>
            <div>Rp6.000.000</div>
          </div>
          <div className="flex space-between">
            <div>mulai dari</div>
            <div>Rp80.000</div>
          </div>
          <div className="flex space-between">
            <div>harga tertinggi saat ini</div>
            <div>Rp680.000</div>
          </div>
        </div>

        <div className="product-desc">
          <div>Untuk 1 Penawar dengan harga tertinggi</div>
        </div>

        <div className="product-desc">
          <h2>Deskripsi</h2>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>

        <div className="flex space-between">
          <div>
            <div className="flex space-between"><div>Sekali Penawaran:</div><div>-1000 point</div></div>
            <div className="flex space-between"><div>Point Kamu:</div><div>200.000</div></div>
          </div>
          <Button transaction block>Bid</Button>
        </div>
      </div>
    )
  }
}

export default DetailLelang