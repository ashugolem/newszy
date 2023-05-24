import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
class Login extends React.Component {
  render() {
    document.title = 'NewsZy - Login';
    return (
        <>
      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img className="img-fluid w-100" src="assets/img/illustrations/login.svg" alt="Login Illustration" />
            </div>
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="display-6 fw-bold mb-5">
                <span className="underline pb-1"><strong>Login</strong><br /></span>
              </h2>
              <form method="post">
                <div className="mb-3">
                  <input className="shadow form-control" style={{borderRadius: "5px"}} type="email" name="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input className="shadow form-control" style={{borderRadius: "5px"}} type="password" name="password" placeholder="Password" />
                </div>
                <div className="mb-5">
                  <button className="btn btn-primary shadow" style={{borderRadius: "2rem"}} type="submit">Log in</button>
                </div>
                <p className="text-muted">
                  <Link to="/forgot-password">Forgot your password?</Link>
                </p>
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

export default Login;
