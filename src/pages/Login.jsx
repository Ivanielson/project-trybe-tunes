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
      <section className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-center mb-5">Logar</h1>
        <div className="shadow p-3 mb-5 bg-body rounded">
          <form className="container">
            <label htmlFor="input-name">
              <input
                className="form-control m-2"
                id="input-name"
                name="name"
                value={ name }
                onChange={ this.handleChangeInput }
                data-testid="login-name-input"
                type="text"
                placeholder="Ex: João"
              />
            </label>
            <button
              className="btn btn-success m-3"
              type="button"
              data-testid="login-submit-button"
              onClick={ this.logar }
              disabled={ name.length < MIN_LENGTH }
            >
              Entrar
            </button>
          </form>
        </div>
      </section>
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
