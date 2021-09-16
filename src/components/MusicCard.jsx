import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { musics } = this.props;
    return (
      <section>
        <p>{ musics.trackName }</p>
        <audio data-testid="audio-component" src={ musics.previewUrl } controls>
          <track kind="captions" />
          {' '}
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </section>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MusicCard;
