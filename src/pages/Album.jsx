import React, { Component } from 'react';
import Header from '../components/Hearder';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <h1>Album</h1>
      </div>
    );
  }
}

export default Album;
