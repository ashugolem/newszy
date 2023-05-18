import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <Router>
        <section className="py-4 py-xl-5">
          <div className="container">
            <div className="bg-primary border rounded border-0 border-primary overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div className="text-white p-4 p-md-5">
                    <h2
                      className="fw-bold text-white mb-3"
                      data-aos="flip-down"
                    >
                      NewsZy: Unveiling the World in a Click!
                    </h2>
                    <p
                      data-aos="fade"
                      data-aos-duration="450"
                      data-aos-delay="300"
                      className="mb-4"
                    >
                      Stay informed, stay connected – NewsZy brings you the
                      world's latest in just one click, empowering you with
                      knowledge at your fingertips
                    </p>
                    <div className="my-3">
                      <Link
                        className="btn btn-warning me-2 mt-2"
                        role="button"
                        data-aos="slide-up"
                        data-aos-delay="300"
                        href="#"
                        style={{ borderRadius: "5rem" }}
                      ></Link>
                      <Link
                        className="btn btn-light mt-2"
                        role="button"
                        data-aos="slide-up"
                        data-aos-delay="950"
                        href="#"
                        style={{ borderRadius: "5rem" }}
                      ></Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 order-first order-md-last"
                  style={{ minHeight: "250px" }}
                >
                  <img
                    data-aos="flip-right"
                    data-aos-delay="950"
                    className="w-100 h-100 fit-contain pt-5 pt-md-0"
                    src="assets/img/illustrations/web-development.svg"
                    alt="Web Development Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default Section;
