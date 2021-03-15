import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Loader.module.css";

export default class App extends React.Component {
  render() {
    return (
      <div className={s.LoaderBox}>
        <Loader type="Circles" color="#00BFFF" height={40} width={40} />
      </div>
    );
  }
}
