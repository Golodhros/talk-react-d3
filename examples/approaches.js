// D3 within React
class Line extends React.Component {

    static propTypes = {...}

    componentDidMount() {
        // D3 Code to create the chart
        // using this._rootNode as container
    }

    shouldComponentUpdate() {
        // Prevents component re-rendering
        return false;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        <div className="line-container" ref={this._setRef.bind(this)} />
    }
}

// React Faux DOM
import {withFauxDOM} from 'react-faux-dom'

class Line extends React.Component {

    static propTypes = {...}

    componentDidMount() {
        const faux = this.props.connectFauxDOM('div', 'chart');

        // D3 Code to create the chart
        // using faux as container
        d3.select(faux)
          .append('svg');
    }

    render() {
        <div className="line-container">
            {this.props.chart}
        </div>
    }
}

export default withFauxDOM(Line);


// Lifecycle methods wrapping
import D3Line from './D3Line'

class Line extends React.Component {

    static propTypes = {...}

    componentDidMount() {
        // D3 Code to create the chart
        this._chart = D3Line.create(
            this._rootNode,
            this.props.data,
            this.props.config
        );
    }

    componentDidUpdate() {
        // D3 Code to update the chart
        D3Line.update(
            this._rootNode,
            this.props.data,
            this.props.config,
            this._chart
        );
    }

    componentWillUnmount() {
        D3Line.destroy(this._rootNode);
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        <div className="line-container" ref={this._setRef.bind(this)} />
    }
}

with the D3Line being something like:

// D3Line.js
const D3Line = {};

D3Line.create = (el, data, configuration) => {
    // D3 Code to create the chart
};

D3Line.update = (el, data, configuration, chart) => {
    // D3 Code to update the chart
};

D3Line.destroy = () => {
    // Cleaning code here
};

export default D3Line;


// React for the DOM, D3 for math
class Line extends React.Component {

    static propTypes = {...}

    drawLine() {
        let xScale = d3.scaleTime()
            .rangeRound([0, this.props.width]);

        let yScale = d3.scaleLinear()
            .rangeRound([this.props.height, 0]);

        let line = d3.line()
            .x((d) => xScale(d.date))
            .y((d) => yScale(d.value));

        return (
            <path
                className="line"
                d={line(this.props.data)}
            />
        );
    }

    render() {
        <svg
            className="line-container"
            width={this.props.width}
            height={this.props.height}
        >
            {this.drawLine()}
        </svg>
    }
}

