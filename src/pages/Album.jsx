import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Hearder';
import musicsAPI from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      playList: [],
    };
  }

  componentDidMount() {
    this.getMusics();
  }

  getMusics = async () => {
    const { match: { params: { id } } } = this.props;
    const getPlayList = await musicsAPI(id);
    this.setState({ playList: getPlayList });
  }

  render() {
    const { playList } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { playList.map((album) => (
          <section key={ album.collectionId }>
            <img src={ album.artworkUrl100 } alt={ `Album ${album.collectionName}` } />
            <h2 data-testid="album-name">{album.collectionName}</h2>
            <h3 data-testid="artist-name">{album.artistName}</h3>
          </section>
        ))[0] }
        { playList.slice(1).map((music) => (
          <MusicCard key={ music.trackId } musics={ music } />
        )) }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
