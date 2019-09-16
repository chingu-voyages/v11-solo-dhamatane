import React, {Component} from 'react';

class Logo extends Component {
  render() {
    return(
      <a className="navbar-brand" href="index.html">
        <img src="images/logo.png" alt="logo" />
      </a>
    );
  }
}

export default Logo;