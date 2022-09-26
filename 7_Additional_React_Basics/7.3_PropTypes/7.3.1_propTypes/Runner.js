import React from 'react';

export class Runner extends React.Component {
    render() {
        let miles = this.props.miles;
        let km = this.props.milesToKM(miles);
        let races = this.props.races.map(function (race, i) {
            return <li key={race + i}>{race}</li>;
        });

        return (
            <div style={this.props.style}>
                <h1>{this.props.message}</h1>
                {this.props.isMetric &&
                    <h2>One Time I Ran {km} Kilometers!</h2>}
                {!this.props.isMetric &&
                    <h2>One Time I Ran {miles} Miles!</h2>}
                <h3>Races I've Run</h3>
                <ul id="races">{races}</ul>
            </div>
        );
    }
}

Runner.propTypes = {
    message: React.PropTypes.string.isRequired,
    style: React.PropTypes.object.isRequired,
    isMetric: React.PropTypes.bool.isRequired,
    miles: React.PropTypes.number.isRequired,
    milesToKM: React.PropTypes.func.isRequired,
    races: React.PropTypes.array.isRequired
};
