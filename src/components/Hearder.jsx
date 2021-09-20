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

  showUserLog = () => {
    const { user } = this.state;
    return (
      <section className="container">
        <p data-testid="header-user-name">
          { user }
        </p>
      </section>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : this.showUserLog() }
        <nav className="mb-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                className="nav-link text-success"
                data-testid="link-to-search"
                to="/search"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-success"
                data-testid="link-to-favorites"
                to="/favorites"
              >
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-success"
                data-testid="link-to-profile"
                to="/profile"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
