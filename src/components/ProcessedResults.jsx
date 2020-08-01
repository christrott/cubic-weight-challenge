import React from 'react';

export default class ProcessedResults extends React.Component {
    render() {
        return <p>Average Cubic Weight: {this.props.result}</p>;
    }
}