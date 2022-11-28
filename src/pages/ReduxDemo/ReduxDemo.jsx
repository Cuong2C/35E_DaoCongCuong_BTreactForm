import React, { Component } from 'react'
import BaiTapChonXeRedux from './BaiTapChonXeRedux'
import DemoTangGiamFontSize from './DemoTangGiamFontSize'
import QuanLyNguoiDung from './QuanLyNguoiDung/QuanLyNguoiDung'

export default class ReduxDemo extends Component {
  render() {
    return (
      <div className='container'>
        <DemoTangGiamFontSize />
        <BaiTapChonXeRedux />
        <QuanLyNguoiDung />
      </div>
    )
  }
}
