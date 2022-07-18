import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalNum: 0,
      guessNum: 0,
      numOfTries: 0,
      deviation: null,
    };
    this.originalNum = Math.floor(Math.random() * 1000 + 1);
    
  }

  handleChange = (event) => {
    this.setState({ guessNum: event.target.value });
  };

  verifyGuess = () => {
    let deviationNum = this.originalNum - this.state.guessNum;
    let noOfTries = this.state.numOfTries + 1;

    this.setState({ deviation: deviationNum, numOfTries: noOfTries });
  };

  resetGame = () => {
    let original = Math.floor(Math.random() * 1000 + 1);
    this.setState({
      guessNum: 0,
      numOfTries: 0,
      deviation: null,
      originalNum: original,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Guess the number!</h2>
          <small className="form-text text-muted">
            Guess the computer genereated nubmer between 1 and 1000.
          </small>
          <hr />
          <div className="form-group">
            <label>Your Guess:</label>
            <input
              type="number"
              name="userInput"
              onChange={this.handleChange}
            />
            <button
              className="btn btn-sm btn-primary mx-2"
              onClick={this.verifyGuess}
            >
              Verify 
            </button>
            <button className="btn btn-sm btn-warning" onClick={this.resetGame}>
              Restart 
            </button>
          </div>

          <div style={{display: this.state.deviation ? 'block' : 'none' }}>
            {this.state.deviation === 0 ? (
              <div className="alert alert-success">That's it.</div>
            ) : this.state.deviation > 0 ? (
              <div className="alert alert-danger">Your guess is lower.</div>
            ) : (
              <div className="alert alert-warning">Your guess is higher.</div>
            )}
          </div>
          <div>
            <div className="text-info">
              Number of Guesses:{" "}
              <span className="badge">{this.state.numOfTries}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
