import React, { Component } from "react";
import ReactDom from "react-dom";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Details from "./details";

import FetchDemo from "./fetch";

let mycourse = ["aa","ff","ee"];
class App extends Component {
  
  render() {
    return (
      <div>
      <FetchDemo/>
      <h1>Welcome to React Session</h1>
        <Details title="this is title..."
          mycourses={mycourse} count={9}/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
