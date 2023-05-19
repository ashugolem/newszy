import React, { Component } from 'react';

class TestimonialCard extends Component {
  render(props) {
    return (
      <div className="col mb-4">
        <div className="d-flex align-items-center align-items-sm-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-quote fs-1 text-warning flex-shrink-0">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
          </svg>
          <div>
            <p className="fs-6 mb-3 ms-2">{this.props.text}</p>
            <div className="d-flex ms-2">
              <div className="d-flex">
                <p className="fw-bold me-2"> {this.props.name} </p>
                <p className="text-muted mb-0">{this.props.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialCard;
