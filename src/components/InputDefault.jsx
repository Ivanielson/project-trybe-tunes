import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDefault extends Component {
  render() {
    const { name, email, description, image, handleChange } = this.props;
    return (
      <section>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Nome
            <input
              className="form-control"
              id="name"
              name="name"
              value={ name }
              data-testid="edit-input-name"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
            <input
              className="form-control"
              id="email"
              name="email"
              value={ email }
              data-testid="edit-input-email"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Descrição
            <input
              className="form-control"
              id="description"
              name="description"
              value={ description }
              data-testid="edit-input-description"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="image">
            Imagem
            <input
              className="form-control"
              id="image"
              name="image"
              value={ image }
              data-testid="edit-input-image"
              onChange={ handleChange }
            />
          </label>
        </div>
      </section>
    );
  }
}

InputDefault.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputDefault;
