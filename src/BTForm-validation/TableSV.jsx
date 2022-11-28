import React, { Component } from 'react'


export default class TableSV extends Component {
    render() {
        const { arrSV } = this.props;
        return (
            <table className='table'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>Mã Sinh Viên</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại </th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {arrSV.map((sv, index) => {
                        return <tr key={index}>
                            <td>{sv.maSV}</td>
                            <td>{sv.hoTen}</td>
                            <td>{sv.sdt}</td>
                            <td>{sv.email}</td>
                            <td>
                                <button className='btn btn-danger mx-2' onClick={()=>{
                                    this.props.handleDelSV(sv.maSV);
                                }}> 
                                <i className='fa fa-trash'></i></button>
                                <button className='btn btn-primary mx-2'> <i className='fa fa-edit'></i></button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        )
    }
}

