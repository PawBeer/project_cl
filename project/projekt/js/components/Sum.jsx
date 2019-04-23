import React from 'react';


const style = {
    fontWeight: 700
  }

export class Sum extends React.Component {
    sum() {
        let sum = 0;
        this.props.items.forEach( item => sum += (item.number * item.price * 0.001));
        return sum.toFixed(2);
    }

    render() {
        return <span>{this.sum()}</span>;
    }
}