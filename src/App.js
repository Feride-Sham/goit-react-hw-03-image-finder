import React, { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
