import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoTangGiamFontSize extends Component {
    // state = {
    //     fontSize:16
    // }
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Ví dụ 1: Tăng giảm fontsize</h3>
                <p style={{ fontSize: this.props.fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus aperiam facilis, distinctio modi magni cupiditate molestiae in et animi laudantium ipsa beatae sit est vel placeat neque sapiente facere!</p>

                <button className='btn btn-success mx-2' onClick={() => {
                    //format data gửi lên redux (action) 
                    const action = {
                        type: 'TANG_GIAM_FONTSIZE', //Nhãn để biết thay đổi state nào
                        payload: 1 //Dữ liệu gửi lên redux
                    };
                    //Dùng props.dispatch để đưa action lên redux
                    this.props.dispatch(action);

                }}>+</button>
                <button className='btn btn-success mx-2' onClick={() => {
                    //format data gửi lên redux (action) 
                    const action = {
                        type: 'TANG_GIAM_FONTSIZE', //Nhãn để biết thay đổi state nào
                        payload: -1 //Dữ liệu gửi lên redux
                    };

                    //Dùng props.dispatch để đưa action lên redux
                    this.props.dispatch(action);

                }}>-</button>


            </div>
        )
    }
}

// return { } : tương đương ()
// const mapStateToProps = (state) => {
//     return {
//         fSize: state.fontSize
//     }
// }


const mapStateToProps = (state) => ({
    fSize: state.fontSize
})


const ComponentRedux = connect(mapStateToProps)(DemoTangGiamFontSize);
export default ComponentRedux;
// function main() {

//     return function () {
//         console.log(123)
//     }
// }

// main()()