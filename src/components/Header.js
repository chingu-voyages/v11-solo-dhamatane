import React, {Component} from 'react';
import Menu from './Menu';
import Banner from './Banner';

class Header extends Component {
  render() {
    return(
      <div>
        <header className="main_menu home_menu">
          <Menu />
        </header>
        <Banner />
      </div>
    );
  }
}

export default Header;