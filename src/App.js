import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navBar';
import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';
import Features from './components/Features';

export class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Header/>
      <FeaturesSection/>
      <Features/>
      </>
    )
  }
}
export default App;
