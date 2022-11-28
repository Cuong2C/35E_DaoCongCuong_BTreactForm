//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormNguoiDung from './FormNguoiDung'
import TableNguoiDung from './TableNguoiDung'

class QuanLyNguoiDung extends Component {
    render() {
        return (
            <div>
                <FormNguoiDung />
                <TableNguoiDung />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(QuanLyNguoiDung)