import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [
        {
            id: uuid.v4(),
            title: "Take out trash",
            completed: false
        },
        {
          id: uuid.v4(),
          title: "Milk cows",
          completed: false
        },
        {
          id: uuid.v4(),
          title: "Wash the car",
          completed: false
        }
    ]
  }

  // toggleComplete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {

    const new_todo={
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, new_todo]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.addTodo}/>
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
