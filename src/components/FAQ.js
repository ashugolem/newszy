import React, { Component } from 'react';

class FAQ extends Component {
  render() {
    return (
      <section className="py-4 py-xl-5 mb-5">
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="display-6 fw-bold mb-5">
                <span className="pb-3 underline">FAQ<br/></span>
              </h2>
              <p className="text-muted mb-5">
                Have Burning Questions? Explore Our Frequently Asked Questions (FAQ)
              </p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-8 mx-auto">
              <div className="accordion text-muted" role="tablist" id="accordion-1">
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-1"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-1"
                    >
                      What is NewsZy?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse item-1"
                    role="tabpanel"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p>
                        NewsZy is a comprehensive news website that aims to deliver timely and accurate information on a wide range of topics, including breaking news, politics, technology, entertainment, sports, and more.
                      </p>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-2"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-2"
                    >
                      How can I access NewsZy?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse item-2"
                    role="tabpanel"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        NewsZy is easily accessible through any internet-connected device, including desktop computers, laptops, smartphones, and tablets. Simply visit our website at www.newszy.com to explore the latest news stories.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-3"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-3"
                    >
                      Can I customize my news preferences on NewsZy?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse item-3"
                    role="tabpanel"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Absolutely! NewsZy allows you to personalize your news experience. You can select your preferred topics of interest, create customized news feeds, and receive tailored notifications to stay informed about the subjects that matter most to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;
