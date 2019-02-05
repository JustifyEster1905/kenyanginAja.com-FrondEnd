import React, { Component } from 'react';
import './App.css';
import BarPage from './components/BarPage';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import FooterPage from './components/FooterPage';


class App extends Component {
  render() {
    return (
      <div>
        <BarPage />
        <HeaderPage />
        <HomePage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
