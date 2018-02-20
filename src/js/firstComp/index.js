import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Josef'
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to the site hey hey heyyyy</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
