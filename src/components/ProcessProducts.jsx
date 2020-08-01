import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import ProcessedResults from './ProcessedResults';
import Processor from '../objects/Processor';

export default class ProcessProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            result: null
        };
    }

    startProcessing() {
        this.setState({ loading: true });
        this.processor = new Processor();
        this.processor.beginProcessing(this.props.baseUrl, this.props.startUrl).then((averageCubicWeight) => {
            this.completeProcessing(averageCubicWeight);
        }).catch((err) => {
            console.error(err);
        });
    }

    completeProcessing(averageCubicWeight) {
        this.setState({
            loading: false,
            result: averageCubicWeight
        });
    }

    render() {
        const { loading, result } = this.state;
        if (result === null && !loading) {
            return (
                <button className="processButton" onClick={() => this.startProcessing()}>
                    Process
                </button>
            );
        } else if (loading) {
            return (<LoadingSpinner />);
        } else if (result !== null) {
            return (<ProcessedResults result={this.state.result} />);
        }
    }
}

