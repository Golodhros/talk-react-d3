// Victory
class LineChart extends React.Component {
    render() {
        return (
            <VictoryChart
                height={400}
                width={400}
                containerComponent={<VictoryVoronoiContainer/>}
            >
                <VictoryGroup
                    labels={(d) => `y: ${d.y}`}
                    labelComponent={
                        <VictoryTooltip style={{ fontSize: 10 }} />
                    }
                    data={data}
                >
                    <VictoryLine/>
                    <VictoryScatter size={(d, a) => {return a ? 8 : 3;}} />
                </VictoryGroup>
            </VictoryChart>
        );
    }
}


// Recharts
class LineChart extends React.Component {
    render () {
        return (
            <LineChart
                width={600}
                height={300}
                data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}


// React-vis
class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crosshairValues: []
        };

        this._onMouseLeave = this._onMouseLeave.bind(this);
        this._onNearestX = this._onNearestX.bind(this);
    }

    _onNearestX(value, {index}) {
        this.setState({crosshairValues: DATA.map(d => d[index])});
    }

    _onMouseLeave() {
        this.setState({crosshairValues: []});
    }

    render() {
        return (
            <XYPlot
                onMouseLeave={this._onMouseLeave}
                width={300}
                height={300}
            >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries
                    onNearestX={this._onNearestX}
                    data={DATA[0]}
                />
                <LineSeries data={DATA[1]} />
                <Crosshair values={this.state.crosshairValues} />
            </XYPlot>
        );
    }
}


// Nivo
class LineChart extends React.Component {
    render () {
        return (
            <ResponsiveLine
                data={data}
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


// VX
class LineChart extends React.Component {
    render () {
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
                    fill="#00f2ff"
                    rx={14}
                />
                <Group top={margin.top}>
                    <LinePath
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        x={x}
                        y={y}
                        stroke='#7e20dc'
                        strokeWidth={2}
                        strokeDasharray='2,2'
                        curve={curveBasis}
                    />
                </Group>
            </svg>
        );
    }
}


// Britecharts
class LineChart extends React.Component {
    render () {
        const margin = {
            top: 60,
            right: 30,
            bottom: 60,
            left: 70,
        };

        return (
            <TooltipComponent
                data={lineData.oneSet()}
                topicLabel="topics"
                title="Tooltip Title"
                render={(props) => (
                    <LineComponent
                        margin={margin}
                        lineCurve="basis"
                        {...props}
                    />
                )}
            />
        );
    }
}






