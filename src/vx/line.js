import React from 'react';
import { Group } from '@vx/group';
import { LinePath } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { genDateValue } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { extent, max } from 'd3-array';

function genLines(num) {
  return new Array(num).fill(1).map(() => {
    return genDateValue(25);
  })
}

const series = genLines(1);
const data = series.reduce((rec, d) => {
  return rec.concat(d)
}, []);

// accessors
const x = d => d.date;
const y = d => d.value;

// responsive utils for axis ticks
function numTicksForHeight(height) {
  if (height <= 300) return 3;
  if (300 < height && height <= 600) return 5;
  return 10;
}

export default class LineChartVX extends React.Component {
    render () {
        let {width, height, margin} = this.props;

        // bounds
        const xMax = width - margin.left - margin.right;
        const yMax = height - margin.top - margin.bottom;

        // scales
        const xScale = scaleTime({
          range: [0, xMax],
          domain: extent(data, x),
        });
        const yScale = scaleLinear({
          range: [yMax, 0],
          domain: [0, max(data, y)],
          nice: true,
        });

        return (
            <svg
                width={width}
                height={height}
            >
                <rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="white"
                    rx={14}
                />
                <Group top={margin.top}>
                    <LinePath
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        x={x}
                        y={y}
                        stroke='#32deaa'
                        strokeWidth={2}
                    />
                </Group>
            </svg>
        );
    }
};
