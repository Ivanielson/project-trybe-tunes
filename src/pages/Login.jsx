import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
      },
      loading: false,
      redirect: false,
    };
  }

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      user: {
        [name]: value,
      },
    });
  }

  logar = async () => {
    const { user } = this.state;
    this.setState({ loading: true });
    const setUser = await createUser(user);
    if (setUser === 'OK') {
      this.setState({ redirect: true });
    }
  };

  renderLogin = () => {
    const { user: { name } } = this.state;
    const MIN_LENGTH = 3;
    return (
      <>
        <h1>Login</h1>
        <form>
          <label htmlFor="input-name">
            <input
              id="input-name"
              name="name"
              value={ name }
              onChange={ this.handleChangeInput }
              data-testid="login-name-input"
              type="text"
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            onClick={ this.logar }
            disabled={ name.length < MIN_LENGTH }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }

  render() {
    const { loading, redirect } = this.state;
    return (
      <div data-testid="page-login">
        { loading ? <Loading /> : this.renderLogin() }
        { redirect && <Redirect to="/search" /> }
      </div>
    );
  }
}

export default Login;
