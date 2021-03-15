import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    // ЗДЕСЬ СЛУШАТЕЛИ
  }

  render() {
    return createPortal(
      <div className={s.Overlay}>
        <div className={s.Modal}>
          {this.props.children}
          {/* <img src="" alt="" /> */}
        </div>
      </div>,
      modalRoot
    );
  }
}
