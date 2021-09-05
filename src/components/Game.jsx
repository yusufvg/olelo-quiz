import React, { Component } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Question from "./Question";

class Game extends Component {
  state = {
    questions: [
      { num: 1, olelo: "'Ehaki", prompt: "q1", answer: "a1" },
      { num: 2, olelo: "'Elua", prompt: "q2", answer: "a2" },
      { num: 3, olelo: "'Ekolu", prompt: "q3", answer: "a3" },
      { num: 4, olelo: "'Ehā", prompt: "q4", answer: "a4" },
      { num: 5, olelo: "'Elima", prompt: "q5", answer: "a5" },
      { num: 6, olelo: "'Eono", prompt: "q6", answer: "a6" },
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
      <div id="game-root">
        <NavBar score={this.state.score} />
        <div className="container">
          {this.state.questions.map((q) => (
            <Question key={q.num} q={q} onScore={this.handleScore} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Game;
