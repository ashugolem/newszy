import React, { Component } from 'react';
import Footer from './Footer';

class ForgotPassword extends Component {
  render() {
    return (
      <>
      <section className="py-4 py-md-5 mt-5">
        <div className="container py-md-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 text-center">
              <img className="img-fluid w-100" src="assets/img/illustrations/desk.svg" alt="Desk" />
            </div>
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="display-6 fw-bold mb-4">Forgot your <span className="underline">password</span>?</h2>
              <p className="text-muted">Enter the email associated with your account and we'll send you a reset link.</p>
              <form method="post">
                <div className="mb-3">
                  <input style={{borderRadius:"5px"}} className="shadow form-control" type="email" name="email" placeholder="Email" />
                </div>
                <div className="mb-5">
                  <button style={{borderRadius:"2rem"}} className="btn btn-primary shadow" type="submit">Reset password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer text={"fixed-bottom"}  />
      </>
    );
  }
}

export default ForgotPassword;
