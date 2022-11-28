import React, { Component } from 'react'

export default class Phone extends Component {

    render() {
        const {phone,xemChiTiet} = this.props;
        return (
            <div className="card">
                <img
                    src={phone.hinhAnh}
                    alt="..."
                    height={450}
                    style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan}</p>
                    <button className="btn btn-dark" onClick={() => {
                        // xemChiTiet(phone);
                        this.props.xemChiTiet(phone)
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
