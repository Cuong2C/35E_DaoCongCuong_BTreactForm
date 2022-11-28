import React, { Component } from 'react'

export default class ChildrentComponent extends Component {
  render() {
    return (
      <div>
        <h3>Title: Cybersoft</h3>
        <h3>Bài tập xem chi tiết</h3>
        <p>{this.props.children.map(item => {
            return item;
        })}</p>
      </div>
    )
  }
}
