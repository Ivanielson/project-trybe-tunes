import React, { Component } from 'react';
import Header from '../components/Hearder';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <h1>Profile</h1>
      </div>
    );
  }
}

export default Profile;
