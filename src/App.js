import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Swither from './pages/Swither';

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
