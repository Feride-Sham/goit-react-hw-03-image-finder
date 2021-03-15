import React from "react";
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

export default ImageGalleryItem;
