//rfc: functional component
import React from 'react'

//Function này sẽ chứa nội dung component
export default function Product() {


    return (
        <div className='card'>
            <img src='https://picsum.photos/id/200/200' alt='...' />
            <div className='card-body'>
                <h4>Tên sản phẩm</h4>
                <p>Giá</p>
            </div>
        </div>
    )
}
