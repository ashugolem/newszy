import React from 'react';
import { Link } from 'react-router-dom';

class PlanSuggestion extends React.Component {
  render() {
    return (
      <section className="py-4 py-xl-5">
        <div className="container rounded">
          <div className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5" data-aos="fade" data-aos-duration="300" style={{ borderRadius: "10px!important" }}>
            <div className="pb-2 pb-lg-1">
              <h2 className="fw-bold text-warning mb-2">Not sure which plan suits you?</h2>
              <p className="mb-0">Let our team make you sure about the best plan for you according to your needs</p>
            </div>
            <div className="my-2">
              <Link className="btn btn-light fs-5 py-2 px-4" role="button" data-aos="zoom-out" data-aos-delay="450" to="/contact" style={{ borderRadius: "5rem" }}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PlanSuggestion;
