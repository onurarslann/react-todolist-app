import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    propTypes = {
        todo: PropTypes.object,
        index: PropTypes.number,
        markTodo: PropTypes.func,
        removeTodo: PropTypes.func
    };

    render() {
        const { todo, index, markTodo, removeTodo } = this.props;
        return (
            <div
              className="todo"
              
            >
              <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
              <div>
                <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
              </div>
            </div>
        );
    }
}