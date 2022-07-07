import React, { Component } from "react";
import "./App.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import FormTodo from './components/FormTodo';

class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      todos: [
        {
          text: "This is a sampe todo",
          isDone: false
        }
      ]
    }
  }

  addTodo (text) {
    const todos = [...this.state.todos, {text}];
    this.setState({todos});
  }

  markTodo (index) {
    const todos = this.state.todos;
    todos[index].isDone = true;
    this.setState({todos});
  }

  removeTodo (index) {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos});
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          <FormTodo addTodo={this.addTodo} />
          <div>
            {this.state.todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={this.markTodo}
                  removeTodo={this.removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

}

export default App;