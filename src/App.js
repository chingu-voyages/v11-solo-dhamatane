import React, {Component} from 'react';
import Header from './components/Header';
// import Main from './components/Main';
import About from './components/About';
import Service from './components/Service';
import CtaPart from './components/CtaPart';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Main /> */}
        <About />
        <Service />
        <CtaPart />
      </div>
    );
  }
}

export default App;
