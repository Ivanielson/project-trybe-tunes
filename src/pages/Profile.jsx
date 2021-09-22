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
    const { user: { name, image, email, description } } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <section
          className="card m-4"
          Style="width: 18rem"
        >
          <img
            className="card-img-top"
            data-testid="profile-image"
            src={ image }
            alt={ `Imagem de perfil do usuário ${name}` }
          />
          <div className="card-body">
            <p className="card-text">
              { name }
            </p>
            <p className="card-text">
              { email }
            </p>
            <p className="card-text">
              { description }
            </p>
          </div>
          <Link className="btn btn-success w-50 m-2" to="/profile/edit">
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
