import React, { Component } from 'react'

export default class SvFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: "",
        }
    }

    handleChange =(e) =>{
        this.setState({searchTerm:e.target.value})
    }

    render() {
        return (
            <div className='d-flex'>
                <input className='form-control' placeholder='Search SV...' value={this.state.searchTerm} onChange={this.handleChange} />
                <button className='btn btn-success ms-2' onClick={()=>{
                    this.props.onSearch(this.state.searchTerm)
                }}>Search</button>
            </div>
        )
    }
}
