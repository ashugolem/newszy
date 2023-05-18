import React from "react";

class PricingSection extends React.Component {
  render() {
    return (
      <section className="py-5">
        <div className="container py-4 py-xl-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2
                className="display-6 fw-bold mb-4"
                data-aos="zoom-out"
                data-aos-duration="950"
                data-aos-delay="100"
              >
                Check out
                <br />
                our <span className="underline">amazing plans</span>
              </h2>
              <p
                className="text-muted"
                data-aos="fade"
                data-aos-duration="950"
                data-aos-delay="100"
              >
                We just have this subscription to serve you better because our
                every employee has their family
              </p>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <div className="card border-0 h-100">
                <div
                  className="card-body d-flex flex-column justify-content-between p-4"
                  data-aos="slide-right"
                  data-aos-duration="450"
                  data-aos-delay="100"
                >
                  <div>
                    <h6 className="fw-bold text-muted">Free</h6>
                    <h4 className="display-5 fw-bold mb-4">₹0</h4>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Access to daily news articles and updates</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Limited access to premium content</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon.icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Basic customer support</span>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 h-100">
                <div
                  className="card-body d-flex flex-column justify-content-between p-4"
                  data-aos="slide-up"
                  data-aos-duration="450"
                  data-aos-delay="100"
                >
                  <div>
                    <h6 className="fw-bold text-muted">Standard</h6>
                    <h4 className="display-5 fw-bold mb-4">₹99</h4>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Full access to premium content</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Enhanced customer support</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Exclusive features</span>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 h-100">
                <div
                  className="card-body d-flex flex-column justify-content-between p-4"
                  data-aos="slide-left"
                  data-aos-duration="450"
                  data-aos-delay="200"
                >
                  <div>
                    <h6 className="fw-bold text-muted">Premium</h6>
                    <h4 className="display-5 fw-bold mb-4">₹199</h4>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Full access to premium content</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Enhanced customer support</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Exclusive features</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <span>Priority customer support</span>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingSection;
