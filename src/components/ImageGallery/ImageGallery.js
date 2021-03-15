import React, { Component } from "react";
// import axios from "axios";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import pixAPI from "../../services/pixabay-service";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    currentPage: 1,
    images: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ currentPage: 1, images: [], error: null }, () =>
        this.fetchGallery()
      );
    }

    if (prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchGallery = () => {
    const { query } = this.props;
    const { currentPage } = this.state;
    this.setState({ isLoading: true });

    setTimeout(() => {
      pixAPI({ query, currentPage })
        .then((response) => {
          if (response.length === 0) {
            alert(`Sorry! ${query} is not found`);
          }
          this.setState((prevState) => ({
            images: [...prevState.images, ...response],
            currentPage: prevState.currentPage + 1,
          }));
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }, 250);
  };

  render() {
    const { images, isLoading, error } = this.state;
    const shouldRenderButton = images.length > 0 && !isLoading;

    return (
      <>
        {error && <h1>Sorry</h1>}
        <ul className={s.ImageGallery}>
          {images.map((img) => (
            <ImageGalleryItem key={img.id} imgItem={img} />
          ))}
        </ul>
        {isLoading && <Loader />}
        {shouldRenderButton && <Button onHandleClick={this.fetchGallery} />}
      </>
    );
  }
}
export default ImageGallery;
