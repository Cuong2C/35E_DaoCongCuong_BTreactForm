import React, { Component } from 'react'

export default class FormCreateProduct extends Component {

    state = {
        values: {
            id: '',
            name: '',
            price: '',
            productType: 'phone',
            image: '',
            description: '',
        },
        errors: {
            id: '',
            name: '',
            price: '',
            image: '',
            description: '',
        },
        valid:false
    }


    checkValid = () => {
        let {values,errors} = this.state;
        //form không hợp lệ khi chỉ cần 1 errors khác rỗng và value = ''
        for(let key in errors){
            if(errors[key] !== '' || values[key] === '') {
                return false;
            }
        }
        return true;
    }

    handleInputChange = (e) => {
        //Lấy ra giá trị của id và value trên thẻ
        const {value,id} = e.target; //id ='price' value='1000'
        //Trên 1 tag sẽ có 2 phần
        /*
            phần thứ 1: Properties là thuộc tính có sẵn của thẻ 
            phần thứ 2: Attribute là các thuộc tính mở rộng do ta tự thêm trên thẻ
        */
        const type = e.target.getAttribute('data-type');
        // console.log(type)
        //Lấy ra values và errors để xử lý trên từng phần
        let newValues = this.state.values;
        newValues[id] = value;
        let newErrors = this.state.errors;
        //Kiểm tra rỗng 
        let messError = '';
        if(value.trim() === '') {
            messError = id + ' cannot be blank !';
        }else {
            if(type === 'number') {
                let regexNumber = /^\d+$/;
                if(!regexNumber.test(value)){
                    messError = id + ' is invalid !';
                }
            }
            if(type === 'email') {
                //check email ....
            }

        }
        newErrors[id] = messError;


        //Cập nhật lại state của errors và values
        this.setState({
           values:newValues,
           errors:newErrors
        },()=> {
            
            //Kiểm tra lỗi 
            let valid = this.checkValid();
            this.setState({
                valid:valid
            })
        })

    }


    handleSubmit = (e) => {
        e.preventDefault(); //Chặn sự kiện reload browser
        if(!this.checkValid()){
            return; //return là lệnh dùng hàm
        }
        console.log('submit')
    }
    render() {
        return (
            <form className='container' onSubmit={this.handleSubmit}>
                <h3>Create product</h3>
                <div className='card'>
                    <h3 className='card-header'>Product info</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>id</p>
                                    <input className='form-control' id="id" name="id" onInput={this.handleInputChange} />
                                    {/* {this.state.errors.id ? <div className='alert alert-danger mt-2'>{this.state.errors.id}</div> : ''} */}
                                    {this.state.errors.id  && <div className='alert alert-danger mt-2'>{this.state.errors.id}</div>}

                                </div>
                                <div className='form-group'>
                                    <p>name</p>
                                    <input className='form-control' id="name" name="name" onInput={this.handleInputChange} />
                                    {this.state.errors.name  && <div className='alert alert-danger mt-2'>{this.state.errors.name}</div>}


                                </div>
                                <div className='form-group'>
                                    <p>price</p>
                                    <input data-type="number" className='form-control' id="price" name="price" onInput={this.handleInputChange} />
                                    {this.state.errors.price  && <div className='alert alert-danger mt-2'>{this.state.errors.price}</div>}


                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>image</p>
                                    <input className='form-control' id="image" name="image" onInput={this.handleInputChange} />
                                    {this.state.errors.image  && <div className='alert alert-danger mt-2'>{this.state.errors.image}</div>}


                                </div>
                                <div className='form-group'>
                                    <p>productType</p>
                                    <select className='form-control' id="productType" onInput={this.handleInputChange}>
                                        <option value={'phone'}>phone</option>
                                        <option value={'tablet'}>tablet</option>
                                        <option value={'laptop'}>laptop</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <p>description</p>
                                    <input className='form-control' id="description" name="description" onInput={this.handleInputChange} />
                                    {this.state.errors.description  && <div className='alert alert-danger mt-2'>{this.state.errors.description}</div>}


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-success m-2' disabled={!this.state.valid} >Create</button>
                    </div>
                </div>
            </form>
        )
    }
}




// checkValid = () => {
//     //form hợp lệ khi values !== '' và error = ''
//     //Lấy ra object value và error để duyệt điều kiện hợp lệ
//     let { values, errors } = this.state;
//     for (let key in errors) {
//         if (errors[key] !== '' || values[key] == '') {
//             return false;
//         }
//     }
//     return true;
// }