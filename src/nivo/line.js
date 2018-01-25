import React, { Component } from 'react';
import {Line} from 'nivo';
// import './styles.css';

const data = [
  {
    "id": "whisky",
    "color": "hsl(177, 70%, 50%)",
    "data": [
      {
        "color": "hsl(173, 70%, 50%)",
        "x": "KP",
        "y": 33
      },
      {
        "color": "hsl(190, 70%, 50%)",
        "x": "SH",
        "y": 32
      },
      {
        "color": "hsl(188, 70%, 50%)",
        "x": "MG",
        "y": 25
      },
      {
        "color": "hsl(164, 70%, 50%)",
        "x": "AR",
        "y": 7
      },
      {
        "color": "hsl(171, 70%, 50%)",
        "x": "HT",
        "y": 53
      },
      {
        "color": "hsl(89, 70%, 50%)",
        "x": "ET",
        "y": 8
      },
      {
        "color": "hsl(216, 70%, 50%)",
        "x": "ID",
        "y": 54
      },
      {
        "color": "hsl(6, 70%, 50%)",
        "x": "FJ",
        "y": 56
      },
      {
        "color": "hsl(304, 70%, 50%)",
        "x": "AU",
        "y": 14
      }
    ]
  },
  {
    "id": "rhum",
    "color": "hsl(224, 70%, 50%)",
    "data": [
      {
        "color": "hsl(8, 70%, 50%)",
        "x": "KP",
        "y": 60
      },
      {
        "color": "hsl(95, 70%, 50%)",
        "x": "SH",
        "y": 36
      },
      {
        "color": "hsl(87, 70%, 50%)",
        "x": "MG",
        "y": 17
      },
      {
        "color": "hsl(200, 70%, 50%)",
        "x": "AR",
        "y": 4
      },
      {
        "color": "hsl(331, 70%, 50%)",
        "x": "HT",
        "y": 5
      },
      {
        "color": "hsl(313, 70%, 50%)",
        "x": "ET",
        "y": 17
      },
      {
        "color": "hsl(209, 70%, 50%)",
        "x": "ID",
        "y": 46
      },
      {
        "color": "hsl(18, 70%, 50%)",
        "x": "FJ",
        "y": 1
      },
      {
        "color": "hsl(225, 70%, 50%)",
        "x": "AU",
        "y": 56
      }
    ]
  },
  {
    "id": "gin",
    "color": "hsl(60, 70%, 50%)",
    "data": [
      {
        "color": "hsl(17, 70%, 50%)",
        "x": "KP",
        "y": 18
      },
      {
        "color": "hsl(202, 70%, 50%)",
        "x": "SH",
        "y": 40
      },
      {
        "color": "hsl(202, 70%, 50%)",
        "x": "MG",
        "y": 60
      },
      {
        "color": "hsl(117, 70%, 50%)",
        "x": "AR",
        "y": 47
      },
      {
        "color": "hsl(14, 70%, 50%)",
        "x": "HT",
        "y": 36
      },
      {
        "color": "hsl(356, 70%, 50%)",
        "x": "ET",
        "y": 14
      },
      {
        "color": "hsl(38, 70%, 50%)",
        "x": "ID",
        "y": 21
      },
      {
        "color": "hsl(224, 70%, 50%)",
        "x": "FJ",
        "y": 47
      },
      {
        "color": "hsl(210, 70%, 50%)",
        "x": "AU",
        "y": 53
      }
    ]
  },
  {
    "id": "vodka",
    "color": "hsl(20, 70%, 50%)",
    "data": [
      {
        "color": "hsl(196, 70%, 50%)",
        "x": "KP",
        "y": 38
      },
      {
        "color": "hsl(72, 70%, 50%)",
        "x": "SH",
        "y": 9
      },
      {
        "color": "hsl(246, 70%, 50%)",
        "x": "MG",
        "y": 6
      },
      {
        "color": "hsl(288, 70%, 50%)",
        "x": "AR",
        "y": 58
      },
      {
        "color": "hsl(349, 70%, 50%)",
        "x": "HT",
        "y": 3
      },
      {
        "color": "hsl(338, 70%, 50%)",
        "x": "ET",
        "y": 22
      },
      {
        "color": "hsl(250, 70%, 50%)",
        "x": "ID",
        "y": 30
      },
      {
        "color": "hsl(260, 70%, 50%)",
        "x": "FJ",
        "y": 0
      },
      {
        "color": "hsl(60, 70%, 50%)",
        "x": "AU",
        "y": 28
      }
    ]
  },
  {
    "id": "cognac",
    "color": "hsl(78, 70%, 50%)",
    "data": [
      {
        "color": "hsl(357, 70%, 50%)",
        "x": "KP",
        "y": 59
      },
      {
        "color": "hsl(275, 70%, 50%)",
        "x": "SH",
        "y": 14
      },
      {
        "color": "hsl(359, 70%, 50%)",
        "x": "MG",
        "y": 26
      },
      {
        "color": "hsl(292, 70%, 50%)",
        "x": "AR",
        "y": 39
      },
      {
        "color": "hsl(94, 70%, 50%)",
        "x": "HT",
        "y": 57
      },
      {
        "color": "hsl(31, 70%, 50%)",
        "x": "ET",
        "y": 54
      },
      {
        "color": "hsl(79, 70%, 50%)",
        "x": "ID",
        "y": 54
      },
      {
        "color": "hsl(70, 70%, 50%)",
        "x": "FJ",
        "y": 3
      },
      {
        "color": "hsl(147, 70%, 50%)",
        "x": "AU",
        "y": 0
      }
    ]
  }
];

class LineChartNivo extends Component {
    render() {
        return (
            <Line
                data={[
                            {
                                id: 'fake corp. A',
                                color: '#547687',
                                data: [0.4, 0.5, 0.7, 0.1, 0.2, 0.5, 0.6, 0.5].map((y, i) => ({ x: `#${i}`, y })),
                            },
                            {
                                id: 'fake corp. B',
                                color: '#7f98a5',
                                data: [0.5, 0.6, 0.8, 0.7, 0.8, 0.5, 0.2, 0.3].map((y, i) => ({ x: `#${i}`, y })),
                            },
                            {
                                id: 'fake corp. C',
                                color: '#a7bac3',
                                data: [0.9, 0.5, 0.6, 0.5, 0.4, 0.3, 0.1, 0.1].map((y, i) => ({ x: `#${i}`, y })),
                            },
                ]}
                width={600}
                height={300}
                margin={{
                    "top": 50,
                    "right": 110,
                    "bottom": 50,
                    "left": 60
                }}
                minY="auto"
                stacked={true}
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "country code",
                    "legendOffset": 36,
                    "legendPosition": "center"
                }}
                axisLeft={{
                    "orient": "left",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "count",
                    "legendOffset": -40,
                    "legendPosition": "center"
                }}
                dotSize={10}
                dotColor="inherit:darker(0.3)"
                dotBorderWidth={2}
                dotBorderColor="#ffffff"
                enableDotLabel={true}
                dotLabel="y"
                dotLabelYOffset={-12}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        "anchor": "bottom-right",
                        "direction": "column",
                        "translateX": 100,
                        "itemWidth": 80,
                        "itemHeight": 20,
                        "symbolSize": 12,
                        "symbolShape": "circle"
                    }
                ]}
            />
        );
    }
}

export default LineChartNivo;
