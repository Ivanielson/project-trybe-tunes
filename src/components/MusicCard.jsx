import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      check: false,
    };
  }

  componentDidMount() {
    this.loadBookmarks();
  }

  handleChangeInput = async ({ target }) => {
    const { checked } = target;
    const { musics } = this.props;
    this.setState({
      loading: true,
      check: checked,
    });
    await addSong(musics);
    this.setState({ loading: false });
    if (!checked) {
      await removeSong(musics);
    }
  }

  loadBookmarks = async () => {
    const { musics } = this.props;
    const favoriteSounds = await getFavoriteSongs();
    const checked = favoriteSounds.some((sound) => sound.trackId === musics.trackId);
    if (checked) {
      this.setState({ check: checked });
    } else {
      await removeSong(musics);
    }
  }

  showCardMusic = () => {
    const { musics } = this.props;
    const { check } = this.state;
    return (
      <section className="p-4">
        <p>{ musics.trackName }</p>
        <audio data-testid="audio-component" src={ musics.previewUrl } controls>
          <track kind="captions" />
          {' '}
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label
          htmlFor={ musics.trackId }
          data-testid={ `checkbox-music-${musics.trackId}` }
        >
          Favorita
          <input
            onChange={ this.handleChangeInput }
            id={ musics.trackId }
            type="checkbox"
            checked={ check }
          />
        </label>
      </section>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      loading ? <Loading /> : this.showCardMusic()
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.shape().isRequired,
};

export default MusicCard;
