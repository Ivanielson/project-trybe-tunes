import React, { Component } from 'react';
import Header from '../components/Hearder';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChangeInput = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  }

  render() {
    const { search } = this.state;
    const MIN_LENGTH = 2;
    const VALIDADTION = search.length < MIN_LENGTH;
    return (
      <div className="container" data-testid="page-search">
        <Header />
        <h1>Search</h1>
        <input
          name="search"
          className="form-control m-2 w-50"
          data-testid="search-artist-input"
          placeholder="Nome do artista"
          onChange={ this.handleChangeInput }
        />
        <button
          className="btn btn-success m-2"
          data-testid="search-artist-button"
          type="button"
          disabled={ VALIDADTION }
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
