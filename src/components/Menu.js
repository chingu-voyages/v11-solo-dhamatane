import React, {Component} from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

class Menu extends Component {
  render() {
    return(
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="ti-menu"></span>
        </button>

        <div
          className="collapse navbar-collapse main-menu-item justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <SocialLinks />          
      </nav>
      </div>
    );
  }
}

export default Menu;