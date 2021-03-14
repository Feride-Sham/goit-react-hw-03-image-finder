import React from "react";
import s from "./Button.module.css";

const Button = ({ onHandleClick }) => {
  return (
    <button type="button" className={s.Button} onClick={onHandleClick}>
      Load more
    </button>
  );
};

export default Button;
