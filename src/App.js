import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos: [
        {
            id: 1,
            title: "Take out trash",
            completed: true
        },
        {
          id: 2,
          title: "Milk cows",
          completed: false
        },
        {
          id: 3,
          title: "Wash the car",
          completed: false
        }
    ]
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {

    })});
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
