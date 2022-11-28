import React, { Component, PureComponent } from "react";

// PureComponent: tự giúp component xử lý phương thức shouldComponentUpdate
// Nó sẽ đi so sánh toàn bộ props và state hiện tại với props và state mới, nếu không có thằng nào thay đổi, nó sẽ không render lại component

export default class Children extends PureComponent {
  // Được chạy mỗi khi state/props thay đổi và chạy trước phương thức render
  // Nếu return về false => không có phép chạy phương thức render
  // shouldComponentUpdate: cung cấp 2 tham số lần lượt là giá trị sau khi thay đổi của props và state
  // shouldComponentUpdate(nextProps, nextState) {
  //   // Chỉ cho phép render lại nếu prop userId bị thay đổi
  //   if (nextProps.userId !== this.props.userId) {
  //     return true; // cho phép render
  //   }

  //   return false;
  // }

  render() {
    console.log("Children render run");
    return (
      <div>
        <h1>Children - {this.props.userId}</h1>
      </div>
    );
  }
}
