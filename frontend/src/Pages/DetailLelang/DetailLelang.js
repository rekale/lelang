import React, { Component } from 'react'
import { css } from 'emotion'
import NavBar from 'unify-react-mobile/build/NavBar'
import Button from 'unify-react-mobile/build/Button'
import BottomSheet from 'unify-react-mobile/build/BottomSheet'
import axios from 'axios'
import moment from 'moment'


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
    background-color: #f1f1f1;
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
    showMenu: false,
    payload: {
      data: {},
      loading: false,
      error: null
    },
    point: 200000,
    form: {
      up: null,
      total: null
    }
  }

  componentWillMount() {
    this.getDetailLelang()
  }
  getDetailLelang = () => {
    this.setState({ loading: true })
    axios.get('http://localhost:8000/products/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          payload: {
            data: res.data,
            loading: false
          }
        })
      })
      .catch(ex => {
        this.setState({
          payload: {
            loading: false,
            error: ex
          }
        })
      })
  }

  triggerBottomSheet = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  upBid = (up, total) => {
    this.setState({
      form: {
        up,
        total
      }
    })
  }
  render() {
    const { data } = this.state.payload
    return(
      <div className={_detailLelang}>
        <div className="product-nav-bar">
          <NavBar inverted
            title=""
            onBack="/daftar-lelang"
          />
        </div>
        <img src="https://picsum.photos/300/300/?random" />
        <div className="flex">
          <div className="hilight2">
            <div className="hilight1">berlaku hingga</div>
            <span>{moment(data.auction_end_at).format('hh : mm : ss')}</span>
          </div>
        </div>
        <div className="product-desc">
          <div className="product-title">{data.name}</div>
          <div className="flex">
            <div className="label1">ajukan lelang</div>
            <div className="label-coret">Rp{data.price}</div>
          </div>
          <div className="flex space-between mr-v">
            <div>mulai dari</div>
            <div className="amount">Rp{data.bid_init_price}</div>
          </div>
          <div className="flex space-between mr-v">
            <div>harga tertinggi saat ini</div>
            <div className="amount font-red">Rp{data.bid_current_price}</div>
          </div>
        </div>

        <div className="product-desc">
          <div className="info-1">Untuk 1 Penawar dengan harga tertinggi</div>
        </div>

        <div className="product-desc">
          <h2>Deskripsi</h2>
          <div>{data.desc}</div>
        </div>

        <div className="flex space-between sticky-bottom">
          <div>
            <div className="flex space-between"><div>Sekali Penawaran: </div><div className="font-red">-{data.points_to_deduct} point</div></div>
            <div className="flex"><div>Point Kamu: </div><div className="font-green">{this.state.point}</div></div>
          </div>
          <Button transaction onClick={this.triggerBottomSheet} style={{width: '100px'}}>Bid</Button>
        </div>

        <BottomSheet title="Pilih Jumlah Penawaran"
          subTitle="SubTitle of Information"
          onClose={this.triggerBottomSheet}
          display={this.state.showMenu}
          actionText="Action Text"
          onActionClick={() => alert('Unify is cool')}
        >
          <div>
            <div className={_gridButton}>
              <Button onClick={() => this.upBid(100000, 100000 + data.bid_current_price)} secondary>100.000</Button>
              <Button onClick={() => this.upBid(500000, 50000 + data.bid_current_price)} secondary>50.000</Button>
              <Button onClick={() => this.upBid(25000, 25000 + data.bid_current_price)} secondary>25.000</Button>
              <Button onClick={() => this.upBid(5000, 5000 + data.bid_current_price)} secondary>5.000</Button>
            </div>
            <div>
              <div>Harga Awal</div>
              <div>Rp{data.bid_current_price}</div>
            </div>
            <div>
              <div>Total Penawaran</div>
              <div>Rp{this.state.form.total}</div>
            </div>
            <Button transaction block>Bid!</Button>
          </div>
        </BottomSheet>
      </div>
    )
  }
}

export default DetailLelang