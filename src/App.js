import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Swither from './pages/Swither';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Swither />
      </BrowserRouter>
    );
  }
}

export default App;
