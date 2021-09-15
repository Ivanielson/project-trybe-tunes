import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Artista extends Component {
  render() {
    const { collection, pathImg, artistName } = this.props;
    return (
      <div className="card" Style="width: 12rem">
        <img
          src={ pathImg }
          className="card-img-top"
          alt={ `Imagem do Album ${collection}` }
        />
        <div className="card-body">
          <p className="card-text">{ collection }</p>
          <p className="card-text">{ artistName }</p>
        </div>
      </div>
    );
  }
}

Artista.propTypes = {
  collection: PropTypes.string.isRequired,
  pathImg: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default Artista;
