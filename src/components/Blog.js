import React, { Component } from "react";
import Slider from "./Slider";
import Articles from "./Articles";
import Sidebar from "./Sidebar";
class Blog extends Component {
  state = {
    articles: {},
    status: null,
  };
  render() {
    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small" />
        <div className="center">
          <div id="content">
            {/*Listado de artículos que vendran de la api REST de node */}
            <Articles />
          </div>
          <Sidebar blog="true" />
        </div>
      </div>
    );
  }
}
export default Blog;
