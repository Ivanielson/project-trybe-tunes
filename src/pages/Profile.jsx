import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Hearder';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.loadingUser();
  }

  loadingUser = () => {
    this.setState({ loading: true });
    getUser().then((result) => this.setState({ user: result }));
    this.setState({ loading: false });
  }

  showProfile = () => {
    const { user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <section
          className="card p-2 position-absolute top-50 start-50 translate-middle"
          Style="width: 25rem"
        >
          <img
            className="card-img-top"
            data-testid="profile-image"
            src={ user.image }
            alt={ `Imagem de perfil do usuário ${user.name}` }
          />
          <div className="card-body">
            <p className="card-text">
              { `Nome ${user.name}` }
            </p>
            <p className="card-text">
              { `E-mail ${user.email}` }
            </p>
            <p className="card-text">
              { `Descrição ${user.description}` }
            </p>
          </div>
          <Link className="btn btn-success" to="/profile/edit">
            Editar perfil
          </Link>
        </section>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      loading ? <Loading /> : this.showProfile()
    );
  }
}

export default Profile;
