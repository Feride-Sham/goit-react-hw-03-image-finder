import React from "react";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ imgItem }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={imgItem.webformatURL}
        alt={imgItem.id}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
