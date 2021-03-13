import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = { query: "" };

  handleChange = (ev) => {
    this.setState({ query: ev.currentTarget.value });
    console.log(ev.currentTarget.value);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
