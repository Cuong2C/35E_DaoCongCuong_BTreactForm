import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Không tìm thấy nội dung!</h3>
        <h3>Bấm vào đây <NavLink className={"btn btn-success"} to="/">Trở về trang chủ</NavLink> </h3>
      </div>
    )
  }
}
