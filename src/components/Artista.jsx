import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Artista extends Component {
  render() {
    const { collection, pathImg, artistName } = this.props;
    return (
      <section className="card-albuns">
        <div
          className="card bg-light shadow p-2 mb-4 rounded"
          Style="width: 14rem; height: 24rem;"
        >
          <img
            className="card-img-top"
            src={ pathImg }
            alt={ `Imagem do Album ${collection}` }
          />
          <div className="card-body text-center">
            <p className="card-text lead">{ collection }</p>
            <p className="card-text">{ artistName }</p>
          </div>
        </div>
      </section>
    );
  }
}

Artista.propTypes = {
  collection: PropTypes.string.isRequired,
  pathImg: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default Artista;
