import React, { Component } from 'react';

import LineChartVictory from './victory/line.js';
import LineChartRecharts from './recharts/line.js';
import LineChartRVis from './react-vis/line.js';
import LineChartVX from './vx/line.js';
import LineChartBritechartsReact from './britecharts-react/line.js';
import LineChartNivo from './nivo/line.js';

import D3Logo from './extra/d3Logo.js';
import Grid from 'react-uikit-grid';
import Article from 'react-uikit-article';
import logo from './logo.svg';
import './App.css';
import 'uikit/dist/css/uikit.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <D3Logo />
        </div>
        <h1>React-D3 Libraries Showcase</h1>
        <div className="App-intro">
          <p>Line chart demos with different React D3 libraries: Victory.js, Recharts, Nivo, VX, Britecharts-react and react-vis.</p>
          <small>Check the code in <a href="https://github.com/Golodhros/talk-react-d3">https://github.com/Golodhros/talk-react-d3</a></small>
        </div>
        <Grid>
          <Article col='1-1'
            className="uk-margin-bottom"
            title="Victory.js"
            lead="Low level charting library by Formidable Labs"
          >
            <section className="demo demo-victory uk-margin-bottom">
              <LineChartVictory />
            </section>
          </Article>

          <Article col='1-1'
            className="uk-margin-bottom"
            title="Recharts"
            lead="A composable charting library built on React components"
          >
            <section className="demo demo-recharts uk-margin-bottom">
              <LineChartRecharts />
            </section>
          </Article>

          <Article col='1-1'
            className="uk-margin-bottom"
            title="Nivo"
            lead="Nivo provides a rich set of dataviz components, built on top of the awesome d3 and Reactjs libraries."
          >
            <section className="demo demo-nivo uk-margin-bottom">
              <LineChartNivo />
            </section>
          </Article>

          <Article col='1-1'
            className="uk-margin-bottom"
            title="VX"
            lead="Low-level visualization components for creating visualizations"
          >
            <section className="demo demo-vx uk-margin-bottom">
              <LineChartVX
                width={400}
                height={200}
                margin={{
                  top: 10,
                  left: 10,
                  right: 10,
                  bottom: 10,
                }}
              />
            </section>
          </Article>

          <Article col='1-1'
            className="uk-margin-bottom"
            title="Britecharts-React"
            lead="React wrapper for Britecharts"
          >
            <section className="demo demo-bcr uk-margin-bottom">
              <LineChartBritechartsReact
                width={400}
                height={200}
              />
            </section>
          </Article>

          <Article col='1-1'
            className="uk-margin-bottom"
            title="react-vis"
            lead="Uber's visualization library"
          >
            <section className="demo demo-react-vis uk-margin-bottom">
              <LineChartRVis />
            </section>
          </Article>
        </Grid>
      </div>
    );
  }
}

export default App;
