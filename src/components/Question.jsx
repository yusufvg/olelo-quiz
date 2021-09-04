import React, { Component } from "react";

class Question extends Component {
  state = {
    submitted: false,
  };

  handleSubmit = (onScore) => {
    const { num, prompt, answer } = this.props.q;

    onScore(document.getElementById(num + "-input").value === answer);

    this.setState({ submitted: true });
  };

  render() {
    const { num, prompt, answer } = this.props.q;

    return (
      <div className="card m-3">
        {/* img goes here w/ class card-img-top */}
        <div className="card-body">
          <h5 className="card-title">Question #{num}</h5>
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
        </div>
      </div>
    );
  }
}

export default Question;
