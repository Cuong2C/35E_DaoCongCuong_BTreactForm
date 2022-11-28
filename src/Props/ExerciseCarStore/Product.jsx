import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        //bs5-card-background
        const {item,viewDetail} = this.props;
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={item.img} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price}</p>
                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
                        viewDetail(item);
                    }}>View detail</button>
                </div>
            </div>

        )
    }
}
