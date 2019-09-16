import React, {Component} from 'react';

class SingleService extends Component {
  render() {
    return (
      <div className="col-sm-6 col-xl-4">
        <div className="single_feature">
          <div className="single_service">
            <span>01</span>
            <h4>
              User experience <br />
              design
            </h4>
            <p>
              There winged grass midst moving earth seed herb fifth you
              multiply you divide cattle stars first cattle.
            </p>
            <ul>
              <li><a href="#">Branding and Identity.</a></li>
              <li><a href="#">Mobile app</a></li>
              <li><a href="#">Web design</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleService;