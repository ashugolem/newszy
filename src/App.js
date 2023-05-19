import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navBar';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Headlines from './components/Headlines';

export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Header/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/headlines' element={<Headlines/>}/>
          <Route exact path='/forgot-password' element={<ForgotPassword/>}>
          
          </Route>
        </Routes>
      </Router>
      </>
    )
  }
}
export default App;
