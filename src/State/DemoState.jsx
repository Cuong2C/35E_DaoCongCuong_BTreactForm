import React, { Component } from 'react'
import BaiTapState from './BaiTapState';
import style from './DemoState.module.css'
export default class DemoState extends Component {
    username = 'Quân';
    // login = false; //false chưa đăng nhập, true đã đăng nhập

    state = {
        login: false //this.state là thuộc tính có sẵn của react class component chứa các giá trị làm thay đổi giao diện
    }

    renderLogin = () => {
        if (this.state.login) {
            return <span>
                Hello ! {this.username}
            </span>
        }

        return <button className='btn btn-success color-red' onClick={() => {
            this.handleLogin();
        }}>
            Login
        </button>
    }

    handleLogin = () => {
        //this.setState là phương thức có sẵn của react class component, dùng để thay đổi giá trị state. Sau khi giá trị state được thay đổi => giao diện tự động render lại
        //Phương thức setState là phương thức bất đồng bộ
        this.setState({
            login: true
        }, () => {
            //function xử lý sau khi setState thực thi xong
            console.log(this.state.login);
        });

    }

    render() {
        return (
            <div>
                <nav className="nav justify-content-end text-white bg-dark">
                    <div className="nav-link text-light" href="#">
                        {/* {this.login ? <span>Hello ! {this.username}</span> : <button>Login</button> } */}
                        {this.renderLogin()}
                    </div>
                </nav>

                <p style={{
                    backgroundColor:'purple',
                    color:'#fff',
                    padding:'15px',
                    margin:'10px'
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem incidunt sequi sit aperiam dolorem, deserunt explicabo at eaque fuga magni voluptatibus, deleniti alias ratione. Sunt fugit quidem eos sapiente.
                </p>

                <div className={`${style['fz-5xl']} bg-primary `}>
                    abc
                </div>
                <hr />
                <h3>Bài tập state</h3>
                <BaiTapState />
            </div>
        )
    }
}
