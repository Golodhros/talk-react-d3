import React, { Component } from 'react';
import PieChartVictory from './victory/pie.js';
import LineChartRecharts from './recharts/line.js';
import LineChartRVis from './react-vis/line.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section className="demo-victory">
          <PieChartVictory />
        </section>
        <section className="demo-victory">
          <LineChartRecharts />
        </section>
        <section className="demo-react-vis">
          <LineChartRVis />
        </section>
      </div>
    );
  }
}

export default App;
