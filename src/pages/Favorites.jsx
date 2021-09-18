import React, { Component } from 'react';
import Header from '../components/Hearder';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      songsList: [],
    };
  }

  componentDidMount() {
    this.getSongsFavorites();
  }

  getSongsFavorites = async () => {
    const songs = await getFavoriteSongs();
    const list = [...songs];
    this.setState({ songsList: [...list] });
  }

  render() {
    const { songsList } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { songsList.map((song) => <MusicCard key={ song.trackId } musics={ song } />) }
      </div>
    );
  }
}

export default Favorites;
