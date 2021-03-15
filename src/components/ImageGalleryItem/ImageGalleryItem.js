import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ imgItem, largeImgUrl, onHandleClick }) => {
  const { id, webformatURL } = imgItem;
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => onHandleClick(largeImgUrl)}
    >
      <img src={webformatURL} alt={id} className={s.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imgItem: PropTypes.object.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
