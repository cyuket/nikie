import React, { Component } from 'react';
import Header from './componets/header_footer/header'
import './resources/styles.css';
import './App.css'
import Featured from './componets/feature'
import Venue from './componets/info'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header/>
        <Featured/>
        <Venue/>
      </div>
    );
  }
}

export default App;
