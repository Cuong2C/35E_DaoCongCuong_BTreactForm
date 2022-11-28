import React, { Component } from 'react'

export default class ProductItem extends Component {

  render() {
    const {item} = this.props;
    return (
      <div className='card'>
          <img src={item.image} alt='...' />
          <div className='card-body'>
            <p>{item.className}</p>
            <p>{item.price}</p>
            <button className='btn btn-dark'>Add to cart</button>
          </div>
      </div>
    )
  }
}
