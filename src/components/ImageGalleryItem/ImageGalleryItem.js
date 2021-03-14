import React from "react";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ imgItem }) => {
  const { id, webformatURL } = imgItem;
  return (
    <li className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={id} className={s.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
