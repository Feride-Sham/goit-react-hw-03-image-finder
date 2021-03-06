import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import pixAPI from "../../services/pixabay-service";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
  };

  state = {
    currentPage: 1,
    images: [],
    isLoading: false,
    error: null,
    showModal: false,
    largeImgUrl: null,
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ largeImgUrl: null });
  };

  handleClickImage = (url) => {
    this.toggleModal();
    this.setState({ largeImgUrl: url });
  };

  render() {
    const { images, isLoading, showModal, largeImgUrl } = this.state;
    const shouldRenderButton = images.length > 11 && !isLoading;

    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map((img) => (
            <ImageGalleryItem
              key={img.id}
              imgItem={img}
              largeImgUrl={img.largeImageURL}
              onHandleClick={this.handleClickImage}
            />
          ))}
        </ul>

        {showModal && (
          <Modal onHandleClose={this.toggleModal}>
            <img src={largeImgUrl} alt="" />
          </Modal>
        )}

        {isLoading && <Loader />}

        {shouldRenderButton && <Button onHandleClick={this.fetchGallery} />}
      </>
    );
  }
}
export default ImageGallery;
