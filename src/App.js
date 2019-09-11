import React, {Component} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Service from './components/Service';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {/* <Main />
        <About />
        <Service /> */}
      </div>
    );
  }
}

export default App;
