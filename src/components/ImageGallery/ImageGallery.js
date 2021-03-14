import React, { Component } from "react";
// import axios from "axios";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import pixAPI from "../../services/pixabay-service";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    currentPage: 1,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.fetchGallery();
    }
  }

  fetchGallery() {
    const { query } = this.props;
    const { currentPage } = this.state;
    pixAPI({ query }, currentPage).then((response) => {
      return this.setState((prevState) => ({
        images: [...response],
        currentPage: prevState.currentPage + 1,
      }));
    });
  }

  render() {
    const { images } = this.state;

    return (
      <ul className={s.ImageGallery}>
        {images.map((img) => (
          <ImageGalleryItem key={img.id} imgItem={img} />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
