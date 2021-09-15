import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Loading extends Component {
  render() {
    return (
      <div className="d-flex align-items-center text-success">
        <strong>Carregando...</strong>
        <div className="spinner-border ms-auto m-2" role="status" aria-hidden="true" />
      </div>
    );
  }
}

export default Loading;
