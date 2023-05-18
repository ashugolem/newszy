import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="pt-5">
        <div className="container pt-4 pt-xl-5">
          <div className="row pt-5">
            <div className="col-md-8 text-center text-md-start mx-auto">
              <div className="text-center">
                <h1 className="display-4 fw-bold bounce animated mb-5" style={{ fontSize: "38.5536px" }}>Get all the headlines in NewsZy</h1>
                <p className="fs-5 text-muted rubberBand animated mb-5">Unleashing the Power of News, Your Gateway to Informed Discoveries!</p>
                <form className="d-flex justify-content-center flex-wrap" method="post">
                  <div className="shadow-lg mb-3"><input className="form-control" type="email" name="email" placeholder="Your Email" /></div>
                  <div className="shadow-lg mb-3"><button className="btn btn-primary shake animated" type="submit">Subscribe </button></div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-10 mx-auto">
              <div className="text-center position-relative"><img className="img-fluid tada animated" alt='Not Found' src="assets/img/illustrations/meeting.svg" style={{ width: "800px" }} /></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;