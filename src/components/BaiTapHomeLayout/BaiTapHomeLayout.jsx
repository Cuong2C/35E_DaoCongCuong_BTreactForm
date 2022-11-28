//rcc: react class component
import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import HeaderHome from './HeaderHome'
import Navigation from './Navigation'

export default class BaiTapHomeLayout extends Component {
    
  render() {
    return (
      <div>
        <HeaderHome />
        <div className='row p-0 m-0'>
            <div className='col-4 p-0'>
                <Navigation />
            </div>
            <div className='col-8 p-0'>
                <Content />
            </div>
        </div>
        <Footer />
      </div> 
      
    )
  }
}
