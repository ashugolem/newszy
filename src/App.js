import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navBar';
import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';
import Features from './components/Features';
import Section from './components/Section';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import PlanSuggestion from './components/PlanSuggestion';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Header/>
      <FeaturesSection/>
      <Features/>
      <Section/>
      <PricingSection/>
      <FAQ/>
      <PlanSuggestion/>
      <Footer/>
      </>
    )
  }
}
export default App;
