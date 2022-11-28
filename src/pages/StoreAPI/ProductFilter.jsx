import React, { Component } from "react";
import axios from "axios";

export default class ProductFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      searchTerm: "",
    };
  }

  fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      // Thành công
      this.setState({ categories: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = (evt) => {
    this.setState({ searchTerm: evt.target.value });
  };

  render() {
    return (
      <div>
        <div className="mb-3 d-flex">
          <input
            className="form-control"
            placeholder="Search product..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-secondary ms-2"
            onClick={() => this.props.onSearch(this.state.searchTerm)}
          >
            Search
          </button>
        </div>

        <div className="mb-3">
          <select
            className="form-control"
            onChange={(evt) => this.props.onChangeCategory(evt.target.value)}
          >
            <option value="">Select Category</option>
            {this.state.categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
