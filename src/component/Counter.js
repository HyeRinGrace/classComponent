import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
  render() {
    const { count, winCount, loseCount, drawCount } = this.props;

    return (
      <div className='PlayBox'>
        <div className='counterContainer'>
          <div>Total: {count}</div>
          <div>Win : {winCount}</div>
          <div>Lose : {loseCount}</div>
          <div>Draw : {drawCount}</div>
        </div>
      </div>
    );
  }
}

export default Counter;
