import React, {Component} from 'react';

import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import CtaPart from './components/CtaPart';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Service />
        <CtaPart />
        <Contact />
      </div>
    );
  }
}

export default App;
