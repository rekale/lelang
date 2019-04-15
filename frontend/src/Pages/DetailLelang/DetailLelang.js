import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'nuka-carousel'
import { css } from 'emotion'

const _detailLelang = css`
  display: flex;
  flex-direction: column;
`

class DetailLelang extends Component {
  render() {
    return(
      <div className={_detailLelang}>
        <Link to="/daftar-lelang">back</Link>
        <Carousel>
          <img src="https://picsum.photos/300/300/?random" />
          <img src="https://picsum.photos/300/300/?random" />
          <img src="https://picsum.photos/300/300/?random" />
          <img src="https://picsum.photos/300/300/?random" />
        </Carousel>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
        <div>desc</div>
      </div>
    )
  }
}

export default DetailLelang