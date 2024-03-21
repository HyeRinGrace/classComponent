// 클래스 컴포넌트로 변경........

import React, { Component } from 'react';
import './App.css';
import Box from './component/box';
import Counter from './component/Counter';

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/231/231640.png",
  },
  scissor: {
    name: "Scissor",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
      winCount: 0,
      loseCount: 0,
      userSelect: null,
      computerSelect: null,
      userJudge: "",
      computerJudge: "",
      userColor: "",
      computerColor: ""
    };
  }

  play = (userChoice) => {
    this.setState({ userSelect: choice[userChoice] });
    const computerChoice = this.computerPlay();
    this.setState({ computerSelect: choice[computerChoice] });
    const judge = this.winner(choice[userChoice], choice[computerChoice]);
    this.setState({ userJudge: judge });
    const computerJudge = this.computerWinner(judge);
    this.setState({ computerJudge: computerJudge });
    const userColor = this.userJudgeColor(judge);
    this.setState({ userColor: userColor });
    const computerColor = this.computerJudgeColor(judge);
    this.setState({ computerColor: computerColor });
  };

  computerPlay = () => {
    const randNum = Math.floor(Math.random() * 3);
    const choiceIndex = Object.keys(choice);
    return choiceIndex[randNum];
  }

  winner = (user, computer) => {
    const { totalCount, winCount, loseCount } = this.state;
    this.setState({ totalCount: totalCount + 1 });
    if (user.name === computer.name) {
      return "draw";
    } else if (user.name === "Rock")
      return computer.name === "Scissor" ? "win" : "lose";
    else if (user.name === "Scissor")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  }

  computerWinner = (judge) => {
    if (judge === "draw") {
      return "draw";
    } else if (judge === "win") {
      return "lose";
    } else if (judge === "lose") {
      return "win";
    }
  }

  userJudgeColor = (colorChoice) => {
    const { winCount, loseCount } = this.state;
    if (colorChoice === "draw") {
      return "lightgray";
    } else if (colorChoice === "win") {
      this.setState({ winCount: winCount + 1 });
      return "yellowgreen";
    } else if (colorChoice === "lose") {
      this.setState({ loseCount: loseCount + 1 });
      return "tomato";
    }
  }

  computerJudgeColor = (colorChoice) => {
    if (colorChoice === "draw") {
      return "lightgray";
    } else if (colorChoice === "win") {
      return "tomato";
    } else if (colorChoice === "lose") {
      return "yellowgreen";
    }
  }

  ResetBtn = () => {
    window.location.reload();
  }

  render() {
    const { totalCount, winCount, loseCount, userSelect, computerSelect, userJudge, computerJudge, userColor, computerColor } = this.state;
    const drawCount = totalCount - (winCount + loseCount);

    return (
      <div>
        <Counter count={totalCount} winCount={winCount} loseCount={loseCount} drawCount={drawCount} />
        <div className='main'>
          <Box title="You" item={userSelect} result={userJudge} color={userColor} />
          <Box title="Computer" item={computerSelect} result={computerJudge} color={computerColor} />
        </div>
        <div className="buttons">
          <button className="ResetBtn" onClick={this.ResetBtn}>Reset</button>
          <button onClick={() => this.play('scissor')}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}

export default App;
