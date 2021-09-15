import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { user } = this.state;
    if (user.length < 1) {
      getUser()
        .then((result) => this.setState({
          user: result.name,
          loading: false,
        }));
    }
  }

  render() {
    const { user, loading } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : <p data-testid="header-user-name">{ user }</p> }
        <nav>
          <ul>
            <li>
              <Link data-testid="link-to-search" to="/search">Search</Link>
            </li>
            <li>
              <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link data-testid="link-to-profile" to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
