import React, { Component } from 'react';
import '../App.css';

class Box extends Component {
  render() {
    const { title, item, result, color } = this.props;

    // 초기 이미지 URL
    const initialImgUrl = 'https://cdn-icons-png.flaticon.com/512/5261/5261874.png';

    return (
      <div className='boxContainer'>
        <h1>{title}</h1>
        <img className="scissors" src={item ? item.img : initialImgUrl} alt="scissors"></img>
        <div className='winnerContainer' style={{ backgroundColor: color }}>
          <div className="winnerJudge">{result}</div>
        </div>
      </div>
    );
  }
}

export default Box;
