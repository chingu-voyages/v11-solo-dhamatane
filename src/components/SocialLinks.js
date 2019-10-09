import React, {Component} from 'react';

class SocialLinks extends Component {
  render() {
    return(
      <div className="social_icon d-none d-lg-block">
        <a href="#"><i className="ti-facebook"></i></a>
        <a href="#"><i className="ti-twitter-alt"></i></a>
        <a href="#"><i className="ti-dribbble"></i></a>
        <a href="#"><i className="ti-instagram"></i></a>
      </div>
    );
  }
}

export default SocialLinks;
