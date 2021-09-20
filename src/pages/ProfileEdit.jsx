import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Hearder';
import InputDefault from '../components/InputDefault';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        email: '',
        image: '',
        description: '',
      },
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

  handleChangeInputEdit = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({
      user: {
        [name]: value,
      },
    }));
  }

  saveEditProfile = async () => {
    const { user } = this.state;
    const userUpadate = await updateUser(user);
    if (userUpadate === 'OK') {
      return <Redirect to="/profile" />;
    }
  }

  showFormEdit = () => {
    const { user: { name, image, email, description } } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <form className="container">
          <InputDefault
            name={ name }
            image={ image }
            email={ email }
            description={ description }
            handleChange={ this.handleChangeInputEdit }
          />
          <button
            className="btn btn-success"
            type="button"
            data-testid="edit-button-save"
            onClick={ this.saveEditProfile }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      loading ? <Loading /> : this.showFormEdit()
    );
  }
}

export default ProfileEdit;
