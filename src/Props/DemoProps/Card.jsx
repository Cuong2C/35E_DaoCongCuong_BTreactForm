import React, { Component } from 'react'

export default class Card extends Component {


  render() {
    //this.props: Thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    //props sẽ không được gán lại giá trị mới
    const {name,age} = this.props;


    return (
      <div className='card'>
        <img src='https://i.pravatar.cc?u=1' alt="..." />
        <div className='card-body'>
            <h3>{name}</h3>
            <p>Age: {age}</p>
        </div>
      </div>
    )
  }
}
