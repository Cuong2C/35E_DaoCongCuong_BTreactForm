import React, { Component } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
export default class HomeTemplate extends Component {


    render() {
        return (
            <div>
                <Header />
                <div style={{ minHeight: 650 }}>
                    <Outlet />
                </div>
                <footer className='text-center p-5 bg-dark text-white'>footer</footer>
            </div>
        )
    }
}
