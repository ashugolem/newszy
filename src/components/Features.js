import React, { Component } from 'react';
import FeatureCard from './FeatureCard';

class Features extends Component {
  render() {
    return (
      <section>
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div><img className="rounded img-fluid fit-cover" data-aos="flip-left" data-aos-delay="950" style={{ minHeight: "300px" }} src="assets/img/illustrations/presentation.svg" width="800" /></div>
            </div>
            <div className="col">
              <div style={{ maxWidth: "450px" }}>
                <h3 className="fw-bold pb-md-4" data-aos="zoom-in">Features that make your stay connected to the world</h3>
                <p className="text-muted py-4 py-md-0" data-aos="fade" data-aos-delay="450">A cutting-edge news website revolutionizing the way information is delivered, captivating readers with captivating content and unrivaled user experience.</p>
                <div className="row gy-4 row-cols-2 row-cols-md-2 text-center">
                  <FeatureCard value = {40} text = {'Amazing Awards'} animation = {'up-left'}/>
                  <FeatureCard value = {100} text = {'Successful partners'} animation = {'up-right'}/>
                  <FeatureCard value = {230} text = {'Employees'} animation = {'down-left'}/>
                  <FeatureCard value = {30} text = {'Updates'} animation = {'down-right'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
