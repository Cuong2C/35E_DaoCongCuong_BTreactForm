import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        const {prod,themGioHang} = this.props;
        return (
            <div className='card'>
                <img src={prod.hinhAnh} alt='...' height={350} style={{ objectFit: 'contain' }} />
                <div className='card-body'>
                    <h3>{prod.tenSP}</h3>
                    <p>{prod.giaBan.toLocaleString()}</p>
                    <button className='btn btn-danger' onClick={()=>{
                        themGioHang(prod);
                    }}>Thêm giỏ hàng <i className='fa fa-cart-plus'></i></button>
                </div>
            </div>
        )
    }
}
