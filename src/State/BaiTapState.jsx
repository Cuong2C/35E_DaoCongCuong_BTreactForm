import React, { Component } from 'react'

export default class BaiTapState extends Component {

    state = {
        fz: 20, //state default ,
        img: 'https://i.pravatar.cc?u=1'
    }


  render() {
    return (
      <div className='container'>
        <h3>Tăng giảm fontSize</h3>
        <p style={{fontSize:`${this.state.fz}px`}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, voluptatem reiciendis quas sit libero dignissimos consectetur molestias accusantium distinctio natus deserunt optio a eaque rerum nobis, explicabo quod nulla laudantium.</p>
        <button className='btn btn-dark mx-2' onClick={()=>{
            this.setState({
                fz: this.state.fz + 5
            })
        }}>+</button>
        <button className='btn btn-dark mx-2' onClick={()=>{
            this.setState({
                fz: this.state.fz - 5
            })
        }}>-</button>

        <hr />
        <div className='card w-25'>
            <img src={this.state.img} alt='...' />
            <div className='card-body'>
                <button className='btn btn-success' onClick={()=>{
                    let randomNumber = Math.floor(Math.random() * 100);
                    let newImgSrc = 'https://i.pravatar.cc?u=' + randomNumber;

                    this.setState({
                        img:newImgSrc
                    })
                }}>Random</button>
            </div>
        </div>

      </div>
    )
  }
}
