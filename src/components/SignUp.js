import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Signup extends Component {
  render() {
    document.title = 'NewsZy - Signup';
    return (
      <>
      <section className="py-4 py-md-5 my-5 signup" >
        <div className="container py-md-5" >
          <div className="row">
            <div className="col-md-6 text-center" ><img className="img-fluid w-100" src="assets/img/illustrations/register.svg" alt="Registration Illustration" /></div>
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="display-6 fw-bold mb-5"><span className="underline pb-1"><strong>Sign up</strong></span></h2>
              <form method="post">
                <div className="mb-3"><input className="shadow-sm form-control" style={{borderRadius: "5px"}} type="email" name="email" placeholder="Email" /></div>
                <div className="mb-3"><input className="shadow-sm form-control" style={{borderRadius: "5px"}} type="password" name="password" placeholder="Password" /></div>
                <div className="mb-3"><input className="shadow-sm form-control" style={{borderRadius: "5px"}} type="password" name="password_repeat" placeholder="Repeat Password" /></div>
                <div className="mb-5"><button className="btn btn-primary shadow" type="submit" style={{borderRadius: "2rem"}}>Create account</button></div>
                <p className="text-muted">Have an account? 
                <Link to="/login">Log in&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="15" y1="16" x2="19" y2="12"></line>
                    <line x1="15" y1="8" x2="19" y2="12"></line>
                  </svg>
                </Link>
                &nbsp;</p>
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

export default Signup;
