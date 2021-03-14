import React, { Component } from "react";
// import axios from "axios";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import pixAPI from "../../services/pixabay-service";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
  };

  componentDidMount() {
    const { query, page } = this.state;
    pixAPI(query, page).then((response) => {
      return this.setState({ images: [...response] });
    });
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <ul className={s.ImageGallery}>
        {images.map((img) => (
          <ImageGalleryItem key={img.id} imgItem={img} />
        ))}
        {/* <ImageGalleryItem /> */}
      </ul>
    );
  }
}
export default ImageGallery;
