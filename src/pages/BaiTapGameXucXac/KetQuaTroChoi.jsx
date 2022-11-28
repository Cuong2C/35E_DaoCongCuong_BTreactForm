import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        let {diemCuoc,soLanCuoc,soBanThang} = this.props;
        return (
            <div className='text-center'>
                <div className='display-4'>
                    <span>Bạn đặt cược:</span> <span className='text-danger'>{diemCuoc ? 'Tài' : 'Xỉu'}</span>
                </div>
                <div className='display-4'>
                    <span>Tổng số bàn thắng:</span> <span className='text-success'>{soBanThang}</span>
                </div>
                <div className='display-4'>
                    <span>Tổng số bàn cược:</span> <span className='text-warning'>{soLanCuoc}</span>
                </div>
                <div className='display-4'>
                    <button className='btn btn-success p-3' onClick={()=>{
                        const action = {
                            type:'PLAY_GAME'
                        }

                        this.props.dispatch(action);
                    }}>Play game</button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    diemCuoc:state.baiTapGameReducer.diemCuoc,
    soLanCuoc:state.baiTapGameReducer.soLanCuoc,
    soBanThang:state.baiTapGameReducer.soBanThang
})


export default connect(mapStateToProps)(KetQuaTroChoi)