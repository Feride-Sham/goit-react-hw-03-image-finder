import React, { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

import "./App.css";

class App extends Component {
  state = {
    query: "",
  };

  onChangeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
