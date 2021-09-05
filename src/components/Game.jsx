import React, { Component } from "react";
import { Instagram } from "react-bootstrap-icons";
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
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <a
                href="/"
                class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              ></a>
              <span class="text-muted">© 2021 Yusuf Van Gieson</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3">
                <a
                  class="text-muted"
                  href="https://instagram.com/amirvg_art?utm_medium=copy_link"
                >
                  Background By: @amirvg_art
                  <Instagram className="mx-2" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default Game;
