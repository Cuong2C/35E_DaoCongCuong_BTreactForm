import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormNguoiDung extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    let taiKhoan = document.getElementById('taiKhoan').value;
    let matKhau = document.getElementById('matKhau').value;
    //this.props.dispatch
    const action = {
      type: 'THEM_NGUOI_DUNG',
      payload: { taiKhoan: taiKhoan, matKhau: matKhau } //object literal (ES6)
    }

    this.props.dispatch(action);
  }
  render() {
    return (
      <form className='card' onSubmit={this.handleSubmit}>
        <div className='card-header'>
          <h3>Thông tin người dùng</h3>
        </div>
        <div className='card-body'>
          <div className='form-group'>
            <p>Tài khoản</p>
            <input className='form-control' name="taiKhoan" id="taiKhoan" />
          </div>
          <div className='form-group'>
            <p>Mật khẩu</p>
            <input className='form-control' name="matKhau" id="matKhau" />
          </div>
        </div>
        <div className='card-footer'>
          <button className='btn btn-success m-2' type="submit">Thêm người dùng</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(FormNguoiDung)