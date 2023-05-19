import React, { Component } from 'react';
import TestimonialCard from './TestimonialCard';

class Testimonial extends Component {
  render() {
    return (
      <section className="py-5 mt-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="fw-bold">What people say<br /><span className="underline pb-2">about us</span></h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
            <TestimonialCard name={'Aman Singhal'} text={'This is the best news app services. I used to read these headlines which makes me stay updated'} city={'Banglore'} />
            <TestimonialCard name={'Anjali Gaikwad'} text={'They have the best tech support ever. They respond very and solve my problem within couple of minutes.'} city={'Chennai'} />
            <TestimonialCard name={'Manshi Singh'} text={'Its filter is very accurate and the news is also very much reliable'} city={'Delhi'} />
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
