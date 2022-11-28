import React, { Component } from "react";
import axios from "axios";
import Children from "./Children";

export default class Lifecycle extends Component {
  // snippet tạo constructor: rconst
  constructor(props) {
    super(props);

    this.state = {
      // tạo state posts để chứa data trả về từ API
      posts: [],
      // tạo state userId để chứa id của user muốn lọc ra danh sách posts
      userId: null,
    };

    console.log("constructor run");
  }

  fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          userId: this.state.userId || null,
        },
      })
      .then((response) => {
        // Call API thành công
        console.log(response.data);
        // Gọi setState để gán data cho state posts
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleMouseMove = () => {
    console.log("mouse moving");
  };

  // Chạy một lần duy nhất sau lần render đầu tiên
  // Thường dùng để xử lý: call API, setState, setTimeout,...
  componentDidMount() {
    console.log("componentDidMount run");
    this.fetchPosts();

    document.addEventListener("mousemove", this.handleMouseMove);
  }

  // Chạy sau mỗi lần render, từ lần render thứ hai trở đi
  // Thường dùng: sử dụng giá trị state và props mới để thực hiện một hành động nào đó như:
  // - Sử dụng giá trị props mới để setState
  // - Sử dụng giá trị state/props mới để call API
  // ** Nếu setState trong componentDidUpdate bắt buộc phải có điều kiện
  // componentDidUpdate: cung cấp 2 tham số lần lượt là giá trị trước khi thay đổi của props và state
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate run", this.state);
    // Nếu state userId bị thay đổi => gọi lại hàm fetchPosts
    // ??: Làm sao để kiểm tra chỉ duy nhất state userId bị thay đổi
    if (prevState.userId !== this.state.userId) {
      this.fetchPosts();
    }
  }

  // Chạy một lần duy nhất trước khi component bị huỷ bỏ
  componentWillUnmount() {
    console.log("componentWillUnmount run");

    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleSelect = (postId) => {
    // postId: id của post muốn lấy thông tin chi tiết
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeUser = (evt) => {
    const { value } = evt.target;
    // Gọi setState để lưu value này vào state userId
    this.setState({ userId: value });
  };

  render() {
    console.log("render run", this.state);

    return (
      <div>
        <Children userId={this.state.userId} />

        {/* Select user */}
        <select onChange={this.changeUser}>
          <option value="">Select User</option>
          <option value={1}>User 1</option>
          <option value={2}>User 2</option>
          <option value={3}>User 3</option>
          <option value={4}>User 4</option>
          <option value={5}>User 5</option>
          <option value={6}>User 6</option>
          <option value={7}>User 7</option>
          <option value={8}>User 8</option>
          <option value={9}>User 9</option>
          <option value={10}>User 10</option>
        </select>

        {/* Danh sách bài posts */}
        <ul>
          {this.state.posts.map((post) => {
            return (
              <li key={post.id}>
                <span className="me-2">{post.title}</span>
                <button onClick={() => this.handleSelect(post.id)}>
                  Chi tiết
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
