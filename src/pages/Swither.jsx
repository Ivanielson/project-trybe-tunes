import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './Login';
import Search from './Search';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

class Swither extends Component {
  render() {
    return (
      <Switch>
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="/profile" component={ Profile } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/search" component={ Search } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Swither;
