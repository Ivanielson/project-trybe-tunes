import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Artista from '../components/Artista';
import Header from '../components/Hearder';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      loading: false,
      artists: [],
      returnRequest: '',
      result: false,
    };
  }

  handleChangeInput = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  }

  getArtista = async () => {
    const { search } = this.state;
    this.setState({
      returnRequest: search,
      search: '',
      loading: true,
      result: true,
    });
    const artist = await searchAlbumsAPI(search);
    const allArtists = [...artist];
    this.setState({ artists: allArtists });
    this.setState({
      loading: false,
    });
  }

  showAlbuns = () => {
    const { artists } = this.state;
    return (
      <section className="row">
        { artists.map(({ collectionId, collectionName, artworkUrl100, artistName }) => (
          <Link
            key={ collectionId }
            to={ `/album/${collectionId}` }
            data-testid={ `link-to-album-${collectionId}` }
          >
            <Artista
              key={ collectionId }
              collection={ collectionName }
              pathImg={ artworkUrl100 }
              artistName={ artistName }
            />
          </Link>
        )) }
      </section>
    );
  }

  showResult = () => {
    const { returnRequest, artists } = this.state;
    if (artists.length > 0) {
      return `Resultado de álbuns de: ${returnRequest}`;
    }
    return 'Nenhum álbum foi encontrado';
  }

  showSearch = () => {
    const { search, loading, result } = this.state;
    const MIN_LENGTH = 2;
    const VALIDADTION = search.length < MIN_LENGTH;
    return (
      <div className="container" data-testid="page-search">
        <Header />
        <h1>Search</h1>
        <input
          name="search"
          value={ search }
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
          onClick={ this.getArtista }
        >
          Procurar
        </button>
        <p>
          { result && this.showResult() }
        </p>
        { loading ? <Loading /> : this.showAlbuns() }
      </div>
    );
  }

  render() {
    return (
      this.showSearch()
    );
  }
}

export default Search;
