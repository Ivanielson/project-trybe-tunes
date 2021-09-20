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
      <>
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
      </>
    );
  }

  showResult = () => {
    const { returnRequest, artists } = this.state;
    if (artists.length > 0) {
      return (
        <div className="alert alert-success d-flex align-items-center m-2">
          <svg
            className="bi flex-shrink-0 me-2"
            width="10"
            height="10"
            role="img"
            aria-label="Info:"
          >
            <use xlinkHref="#info-fill" />
          </svg>
          <div>
            { `Resultado de álbuns de: ${returnRequest}` }
          </div>
        </div>
      );
    }
    return (
      <div className="alert alert-danger d-flex align-items-center m-2">
        <svg
          className="bi flex-shrink-0 me-2"
          width="10"
          height="10"
          role="img"
          aria-label="Info:"
        >
          <use xlinkHref="#info-fill" />
        </svg>
        <div>
          Nenhum álbum foi encontrado
        </div>
      </div>
    );
  }

  showSearch = () => {
    const { search, loading, result } = this.state;
    const MIN_LENGTH = 2;
    const VALIDADTION = search.length < MIN_LENGTH;
    return (
      <main data-testid="page-search">
        <Header />
        <section className="d-flex flex-wrap justify-content-center">
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
        </section>
        <section>
          { result && this.showResult() }
          <section className="d-flex flex-wrap justify-content-between">
            { loading ? <Loading /> : this.showAlbuns() }
          </section>
        </section>
      </main>
    );
  }

  render() {
    return (
      this.showSearch()
    );
  }
}

export default Search;
