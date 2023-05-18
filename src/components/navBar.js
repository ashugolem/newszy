import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-md fixed-top bounce animated navbar-shrink py-3 text-center" data-bss-disabled-mobile="true" id="mainNav" style={{ background: "var(--bs-gray-400)" }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span data-bss-disabled-mobile="true" data-bss-hover-animate="rubberBand">NewsZy</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className={`nav-link ${this.props.status}`} href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="features.html">Headlines</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="integrations.html">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pricing.html">Bollywood</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contacts.html">Hollywood</a>
              </li>
            </ul>
            <a className="btn btn-primary shadow" role="button" data-bss-disabled-mobile="true" data-bss-hover-animate="wobble" href="signup.html" style={{ borderRadius: "2rem" }}>Sign Up</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;