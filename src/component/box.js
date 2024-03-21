import React, { Component } from 'react';
import '../App.css';

class Box extends Component {
  render() {
    const { title, item, result, color } = this.props;

    return (
      <div className='boxContainer'>
        <h1>{title}</h1>
        <img className="scissors" src={item && item.img} alt="scissors"></img>
        <div className='winnerContainer' style={{ backgroundColor: color }}>
          <div className="winnerJudge">{result}</div>
        </div>
      </div>
    );
  }
}

export default Box;
