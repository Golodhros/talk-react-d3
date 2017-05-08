import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import './styles.css';

const data1 = [
      {x: 0, y: 4000, pv: 2400, amt: 2400},
      {x: 1, y: 3000, pv: 1398, amt: 2210},
      {x: 2, y: 2000, pv: 9800, amt: 2290},
      {x: 3, y: 2780, pv: 3908, amt: 2000},
      {x: 4, y: 1890, pv: 4800, amt: 2181},
      {x: 5, y: 2390, pv: 3800, amt: 2500},
      {x: 6, y: 3490, pv: 4300, amt: 2100}
];
const data2 = [
      {x: 0, pu: 4000, y: 2400, amt: 2400},
      {x: 1, pu: 3000, y: 1398, amt: 2210},
      {x: 2, pu: 2000, y: 9800, amt: 2290},
      {x: 3, pu: 2780, y: 3908, amt: 2000},
      {x: 4, pu: 1890, y: 4800, amt: 2181},
      {x: 5, pu: 2390, y: 3800, amt: 2500},
      {x: 6, pu: 3490, y: 4300, amt: 2100}
];

class LineChartRVis extends Component {
  render() {
    return (
        <XYPlot
          width={500}
          height={300}>
          <HorizontalGridLines />
          <LineSeries
            data={data1}
            />
          <LineSeries
            data={data2}
            />
          <XAxis />
          <YAxis />
        </XYPlot>
    );
  }
}

export default LineChartRVis;
