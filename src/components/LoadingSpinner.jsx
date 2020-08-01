import React from 'react';
import loading from '../loading.svg';

export default class LoadingSpinner extends React.PureComponent {
    render() { 
        return <img src={loading} alt="Loading"></img>
    }
}