import React, { Component } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Question from "./Question";

class Game extends Component {
  state = {
    questions: [
      {
        num: 1,
        olelo: "'Ehaki",
        prompt: "What month is Hawaiian History Month?",
        answer: "September",
      },
      {
        num: 2,
        olelo: "'Elua",
        prompt:
          "What sport was invented by the kānaka maoli (the native hawaiian people) and popularized in the US by Duke Kahanamoku?",
        answer: "Surfing",
      },
      {
        num: 3,
        olelo: "'Ekolu",
        prompt:
          "What form of cultural expression is used by kānaka maoli as a means of storytelling and spiritual connection?",
        answer: "Hula",
      },
      {
        num: 4,
        olelo: "'Ehā",
        prompt:
          "Described in the Kumulipo (the creation chant), the kalo plant first grew from Papahānaumoku's (Earth Mother) stillborn son's grave, and was cultived by and nourished her second son, Haloa, the first man. What is the more common name for  kalo?",
        answer: "Taro",
      },
      {
        num: 5,
        olelo: "'Elima",
        prompt:
          "The Merrie Monarch festival is a cultural celebration of Hawaiian arts, named after King David La'amea Kalākaua who, under his motto of 'Ho'oūlu Lāhui' or 'Increase the Nation', rebelled against missionary strictures that suppressed practice of Hawaiian culture and beliefes and instead encouraged a cultural renaissance. What year did the first hula competition take place in this festival?",
        answer: "1971",
      },
      {
        num: 6,
        olelo: "'Eono",
        prompt:
          "For how many years was the Kingdom of Hawai'i a sovereign nation prior to the overthrow of Queen Lili'oukalani in 1893?",
        answer: "98",
      },
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
        <div className="text-center">
          <a href="#game-root">
            <button className="btn btn-primary">Back To Top</button>
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Game;
