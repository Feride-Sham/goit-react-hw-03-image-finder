import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = { query: "" };

  handleChange = (ev) => {
    this.setState({ query: ev.currentTarget.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            // autocomplete="off"
            // autofocus
            // placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
