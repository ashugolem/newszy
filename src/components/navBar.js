import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className=" navbar navbar-light navbar-expand-md fixed-top bounce animated navbar-shrink py-3 text-center" data-bss-disabled-mobile="true" id="mainNav">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span data-bss-disabled-mobile="true" style={{color: "white"}} data-bss-hover-animate="rubberBand"  >NewsZy</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item" >
                <Link className={`nav-link  ${this.props.status}`} style={{color: "white"}} to="/">Home</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" style={{color: "white"}} to="/headlines">Headlines</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" style={{color: "white"}} to="/">Sports</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" style={{color: "white"}} to="/">Bollywood</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" style={{color: "white"}} to="/">Hollywood</Link>
              </li>
            </ul>
            <Link className="btn btn-primary shadow" role="button" data-bss-disabled-mobile="true" data-bss-hover-animate="wobble" to="/signup" style={{ borderRadius: "2rem", background: "#516695" }}>Sign Up</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;