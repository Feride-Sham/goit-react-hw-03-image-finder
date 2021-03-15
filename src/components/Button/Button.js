import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ onHandleClick }) => {
  return (
    <button type="button" className={s.Button} onClick={onHandleClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onHandleClick: PropTypes.func.isRequired,
};

export default Button;
