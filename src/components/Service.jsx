import React, {Component} from 'react';
import SingleService from './SingleService';

class Service extends Component {
  render() {
    return (
      <div>
        <section className="our_service">
          <div className="container">
            <div className="row">
              <SingleService />
              <SingleService />
              <SingleService />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Service;