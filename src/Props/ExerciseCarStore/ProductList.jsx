import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {


    renderProduct = () => {
        const { data,viewDetail } = this.props;
        return data.map((item, index) => {
            return <div className='col-3' key={index}>
                <Product item={item} viewDetail={viewDetail}/>
            </div>
        })
    }

    render() {
        return (
            <>
                <h3 className='text-center'>Product list</h3>
                <div className='row'>
                    {this.renderProduct()}
                </div>
            </>
        )
    }
}
