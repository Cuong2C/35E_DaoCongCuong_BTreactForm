import React, { Component } from 'react'
import SvFilter from './SvFilter';
import TableSV from './TableSV';

export default class BTForm extends Component {

    state = {
            formValue:{
                maSV:'',
                sdt:'',
                hoTen:'',
                email:''
            },
            formError:{
                maSV:'',
                sdt:'',
                hoTen:'',
                email:''
            },
            valid:false,

            arrSV:[{
                maSV:'123',
                sdt:'0123456789',
                hoTen:'Big',
                email:'big@gmail.com'
            }],

            searchTerm:''
    }

    checkValid = () => {
        let {formError,formValue} = this.state;
        //form không hợp lệ khi chỉ cần 1 errors khác rỗng và value = ''
        for(let key in formError){
            if(formError[key] !== '' || formValue[key] === '') {
                return false;
            }
        }
        return true;
    }

    handleChangeInput = (e) =>{
        let value = e.target.value;
        let name = e.target.name;
        let dataType = e.target.getAttribute('data-type');

        let newFormValue = this.state.formValue;
        newFormValue[name] = value;
       


        // form Error
        let newFormError = this.state.formError;
        let mess = '';
        if(value.trim() === ''){
            mess = name + ' can not be blank';
        }else{
            if(dataType == 'number'){
                let regexNumber = /^[-+]?[0-9]+$/;
                if(!regexNumber.test(value)){
                    mess = name + ' is invalid';
                }
            }
            if(dataType == 'sdt'){
                let regexsdt =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                if(!regexsdt.test(value)){
                    mess = name + ' is invalid';
                }
            }
            if(dataType == 'hoTen'){
                let regexhoTen =  /^[ a-zA-Z\-\']+$/;
                if(!regexhoTen.test(value)){
                    mess = name + ' is invalid';
                }
            }
            if(dataType == 'mail'){
                let regexmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if(!regexmail.test(value)){
                    mess = name + ' is invalid';
                }
            }
        }
        newFormError[name] = mess;

        // set state
        this.setState({
            formValue:newFormValue,
            formError:newFormError
        },()=>{
            this.setState({
                valid:this.checkValid()
            })
        })

        console.log(name, value);




    }


    handleSubmit = (e) => {
        e.preventDefault(); //Chặn sự kiện reload browser
        if(!this.checkValid()){
            return; 
        }

        let arrSV = this.state.arrSV;
        arrSV.push({...this.state.formValue});
        this.setState({
            arrSV:arrSV
        })
        
    }

    handleDelSV=(idClick)=>{
        let arrSV = this.state.arrSV.filter(sv=>sv.maSV !== idClick);

        this.setState({
            arrSV:arrSV
        })
    }

    handleSearch = (searchTerm)=>{
        this.setState({searchTerm});
    }

    render() {
        return (
            <>
            <form className='container' onSubmit={this.handleSubmit}>
                
                <div className='card'>
                <h3 className='card-header text-white bg-dark'>Thông Tin Sinh Viên</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>Mã Sinh Viên</p>
                                    <input data-type='number' className='form-control' name="maSV" onInput={this.handleChangeInput}/>
                                    {this.state.formError.maSV && <div className='alert alert-danger py-1'>{this.state.formError.maSV}</div>}

                                </div>
                                <div className='form-group'>
                                    <p>Số Điện Thoại</p>
                                    <input data-type='sdt' className='form-control' name="sdt" onInput={this.handleChangeInput}/>
                                    {this.state.formError.sdt && <div className='alert alert-danger py-1'>{this.state.formError.sdt}</div>}


                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>Họ Tên</p>
                                    <input data-type='hoTen' className='form-control' name="hoTen" onInput={this.handleChangeInput}/>
                                    {this.state.formError.hoTen && <div className='alert alert-danger py-1'>{this.state.formError.hoTen}</div>}
                                </div>

                                <div className='form-group'>
                                    <p>Email</p>
                                    <input data-type='mail' className='form-control' name="email" onInput={this.handleChangeInput}/>
                                    {this.state.formError.email && <div className='alert alert-danger py-1'>{this.state.formError.email}</div>}

                                </div>
                            </div>
                        </div>
                        <div >
                        <button type='submit' className='btn btn-success m-2' disabled={!this.state.valid} >Thêm Sinh Viên</button>
                    </div>
                  
                    </div>
                  
                    
                </div>
            </form>
                <div className='container'>
                    <div><SvFilter onSearch = {this.handleSearch}/></div>
                    <TableSV arrSV={this.state.arrSV} handleDelSV={this.handleDelSV} />
                </div>

            </>
        )

    }
}
