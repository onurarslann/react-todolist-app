import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class FormTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            value: ""
        }
    }
    propTypes = {
        addTodo: PropTypes.func
    }

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.value) return;
        this.props.addTodo(this.state.value);
        this.setState({value: ""});
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}> 
            <Form.Group>
              <Form.Label><b>Add Todo</b></Form.Label>
              <Form.Control type="text" className="input" value={this.state.value} onChange={e => this.setState({value: e.target.value})} placeholder="Add new todo" />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
              Submit
            </Button>
          </Form>
        );
    }
}