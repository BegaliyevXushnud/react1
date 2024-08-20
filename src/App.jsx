import React, { Component } from 'react';

export default class App extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className='container'>
       <div className='d-flex gap-3 mt-4 '>
       <button onClick={this.increaseCount} className='btn btn-info'>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.decrement} className='btn btn-danger'>-</button>
       </div>
      </div>
    );
  }
}
