import React, { Component } from "react";
import NavBar from "./NavBar";
import Question from "./Question";

class Game extends Component {
  state = {
    questions: [
      { num: 1, prompt: "q1", answer: "a1" },
      { num: 2, prompt: "q2", answer: "a2" },
      { num: 3, prompt: "q3", answer: "a3" },
      { num: 4, prompt: "q4", answer: "a4" },
      { num: 5, prompt: "q5", answer: "a5" },
      { num: 6, prompt: "q6", answer: "a6" },
    ],
    score: 0,
    answered: 0,
  };

  handleScore = (correct) => {
    const update = { answered: this.state.answered + 1 };
    this.setState(
      correct ? { ...update, score: this.state.score + 1 } : update
    );
  };

  render() {
    return (
      <div>
        <NavBar score={this.state.score} />
        <div className="container">
          {this.state.questions.map((q) => (
            <Question key={q.num} q={q} onScore={this.handleScore} />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
