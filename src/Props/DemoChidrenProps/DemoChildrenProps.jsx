import React, { Component } from 'react'
import BaiTapXemChiTiet from '../../State/BaiTapXemChiTiet/BaiTapXemChiTiet'
import ExerciseCarStore from '../ExerciseCarStore/ExerciseCarStore'
import ChildrentComponent from './ChildrentComponent'

export default class DemoChildrenProps extends Component {
  render() {
    return (
      <div className='container'>
        <ChildrentComponent>
            <ExerciseCarStore />
            <BaiTapXemChiTiet/>
        </ChildrentComponent>

      </div>
    )
  }
}
