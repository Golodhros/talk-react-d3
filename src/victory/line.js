import React, { Component } from 'react';
import { VictoryVoronoiContainer, VictoryLine, VictoryTheme, VictoryAxis, VictoryChart, VictoryTooltip } from 'victory';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];

class LineChartVictory extends Component {
  render() {
    return (
        <VictoryChart
            height={300}
            width={500}
            containerComponent={
                <VictoryVoronoiContainer dimension="x"
                  labels={(d) => `uv: ${d.uv}`}
                  labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}
                />
              }
            theme={VictoryTheme.material}
        >
            <VictoryLine
                labelComponent={<VictoryTooltip/>}
                data={data}
                x="name"
                y="uv"
                theme={VictoryTheme.grayscale}
            />
            <VictoryLine
                labelComponent={<VictoryTooltip/>}
                data={data}
                x="name"
                y="pv"
                theme={VictoryTheme.grayscale}
            />
            <VictoryAxis
              dependentAxis
            />
            <VictoryAxis
                scale="time"
                standalone={false}
            />
        </VictoryChart>
    );
  }
}

export default LineChartVictory;
