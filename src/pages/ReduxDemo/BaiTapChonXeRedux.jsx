//rcredux => Xoá chữ export và xoá hàm mapDispatchToProps

import React, { Component } from 'react'
import { connect } from 'react-redux'

 class BaiTapChonXeRedux extends Component {
    // state = {
    //     imgSrc: './img/red-car.jpg'
    // }

    handleChangeColor = (color) => {
        let newImgSrc = `./img/${color}-car.jpg`;
        const action = {
            type:'CHANGE_COLOR',
            payload: newImgSrc
        };

        //Sử dụng this.props.dispatch gửi action lên reducer
        this.props.dispatch(action);
    }
    render() {
        console.log(this.props);
        let {imgSrc} = this.props;
        return (
            <div>
                <hr />
                <h3>Bài tập chọn xe hơi</h3>
                <div className='row'>
                    <div className='col-6'>
                        <img src={imgSrc} className='w-100' alt='...' />
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-danger mx-2' onClick={()=>{
                            this.handleChangeColor('red');
                        }}>Red</button>
                        <button className='btn btn-secondary mx-2' onClick={()=>{
                            this.handleChangeColor('steel');
                        }}>Steel</button>
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            this.handleChangeColor('black');
                        }}>Black</button>
                        <button className='btn btn-default mx-2' onClick={()=>{
                            this.handleChangeColor('silver');
                        }}>silver</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    imgSrc: state.imgSrc
})
export default connect(mapStateToProps)(BaiTapChonXeRedux)