//rcc
import React, { Component } from 'react'

export default class DataBinding extends Component {

    product= {
        id:1,
        name:'product 1',
        price:1000,
        image: 'https://i.pravatar.cc'
    };
    

    tong2So = (a, b) => {
        //Dữ liệu trả về của phương thức : string, number, boolean, jsx component (<div>....</div>) không return về object hoặc array
        return a + b;
    }

    renderProduct = () => {
        
        return <div className='card'>
            <img src={this.product.image} />
            <div className='card-body'>
                <h3>{this.product.name}</h3>
                <p>{this.product.price}</p>
                <button className='btn btn-dark'>Add to cart</button>
            </div>
        </div>
    }

    render() {
        let title = 'Cybersoft';

        return (
            <div className='container'>
                <h3>Title: {title}</h3>

                <h3>Tổng : {this.tong2So(5, 10)}</h3>
                <div className='w-25'>
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
