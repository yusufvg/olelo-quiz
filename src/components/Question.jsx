import React, { Component } from "react";
import { Check, X } from "react-bootstrap-icons";

class Question extends Component {
  state = {
    submitted: false,
    res: "none",
  };

  handleSubmit = (onScore) => {
    const { num, prompt, answer } = this.props.q;

    const res =
      document
        .getElementById(num + "-input")
        .value.trim()
        .toLowerCase() === answer;

    onScore(res);

    this.setState({ submitted: true, res: res.toString() });
  };

  render() {
    const { num, olelo, prompt, answer } = this.props.q;

    let badge = "";
    switch (this.state.res) {
      case "true":
        badge = (
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            <Check />
            <span class="visually-hidden">correct</span>
          </span>
        );
        break;
      case "false":
        badge = (
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <X />
            <span class="visually-hidden">incorrect</span>
          </span>
        );
        break;
    }

    return (
      <div className="card m-3">
        {/* img goes here w/ class card-img-top */}
        <div className="card-body">
          <h5 className="card-title">
            Question #{num} - Nīnau {olelo}
          </h5>
          <p className="card-text">{prompt}</p>
          <div className="input-group mb-3">
            <span className="input-group-text">Answer</span>
            <input
              id={num + "-input"}
              type="text"
              className="form-control"
              placeholder="hua mai"
              aria-describedby="basic-addon1"
              disabled={this.state.submitted}
            />
            <button
              className="btn btn-primary"
              onClick={() => this.handleSubmit(this.props.onScore)}
              disabled={this.state.submitted}
            >
              Submit
            </button>
          </div>
          {this.state.res === "false" && (
            <p className="card-text">Correct Answer: {answer}</p>
          )}
        </div>
        {badge}
      </div>
    );
  }
}

export default Question;
