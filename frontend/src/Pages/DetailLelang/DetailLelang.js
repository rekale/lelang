import React, { Component } from 'react'
import { css } from 'emotion'
import NavBar from 'unify-react-mobile/build/NavBar'
import Button from 'unify-react-mobile/build/Button'
import BottomSheet from 'unify-react-mobile/build/BottomSheet'


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
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  .product-nav-bar {
    position: sticky;
    top: 0;
  }
  .product-desc {
    padding: 0 16px 16px;
  }
  .product-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    margin: 8px 0;
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
  .hilight1 {
    background-color: red;
    color: #fff;
    padding: 8px 16px;
    border-radius: 0 0 24px 0;
  }
  .hilight2 {
    display: flex;
    background-color: #fafafa;
    color: red;
    border-radius: 0 0 24px 0;
    span {
      margin: 8px 16px;
    }
  }
  .label1 {
    background-color: pink;
    color: red;
    border-radius: 4px;
    font-size: 10px;
    padding: 4px;
    margin-right: 8px;
  }
  font1 {
    font-weight: bold;
    color: black;
  }
  .amount {
    color: black;
    font-weight: bold;
    font-size: 14px;
  }
  .label-coret {
    color: rgba(0, 0, 0, 0.38);
    text-decoration: line-through;
    font-weight: bold;
  }
  .sticky-bottom {
    position: sticky;
    bottom: 0;
    background-color: #fff;
    padding: 8px;
    box-shadow: 0px 0px 19px -2px rgba(209,209,209,1);
  }
  .mr-v {
    margin: 8px 0;
  }
  .font-red {
    color: red;
  }
  .font-green {
    color: green;
  }
  .grid-button {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    padding: 16px;
    margin: 0 auto;
  }
`

const _gridButton = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  padding: 16px;
  max-width: 360px;
  margin: 0 auto;
`

class DetailLelang extends Component {
  state = {
    showMenu: false
  }

  triggerBottomSheet = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
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

        <div className="flex">
          <div className="hilight2">
            <div className="hilight1">berlaku hingga</div>
            <span>02 : 27 : 53</span>
          </div>
        </div>
        <div className="product-desc">
          <div className="product-title">{data.name} twetaweawefa wefawe fawefawefaw awfeawfawefawef aewfawefaew awefawe a</div>
          <div className="flex">
            <div className="label1">ajukan lelang</div>
            <div className="label-coret">Rp6.000.000</div>
          </div>
          <div className="flex space-between mr-v">
            <div>mulai dari</div>
            <div className="amount">Rp80.000</div>
          </div>
          <div className="flex space-between mr-v">
            <div>harga tertinggi saat ini</div>
            <div className="amount font-red">Rp680.000</div>
          </div>
        </div>

        <div className="product-desc">
          <div className="info-1">Untuk 1 Penawar dengan harga tertinggi</div>
        </div>

        <div className="product-desc">
          <h2>Deskripsi</h2>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>

        <div className="flex space-between sticky-bottom">
          <div>
            <div className="flex space-between"><div>Sekali Penawaran:</div><div className="font-red">-1000 point</div></div>
            <div className="flex"><div>Point Kamu:</div><div className="font-green">200.000</div></div>
          </div>
          <Button transaction onClick={this.triggerBottomSheet}>Bid</Button>
        </div>

        <BottomSheet title="Title of Information"
          subTitle="SubTitle of Information"
          onClose={this.triggerBottomSheet}
          display={this.state.showMenu}
          actionText="Action Text"
          onActionClick={() => alert('Unify is cool')}
        >
          <div className={_gridButton}>
            <Button secondary>100.000</Button>
            <Button secondary>50.000</Button>
            <Button secondary>25.000</Button>
            <Button secondary>5.000</Button>
          </div>
          <Button transaction block>Bid!</Button>
        </BottomSheet>
      </div>
    )
  }
}

export default DetailLelang