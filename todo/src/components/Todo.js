import React from 'react';
import { completeTodo } from '../actions/index';
import { connect } from 'react-redux';
import './Todo.css';

const Todo = props => {
    return (
        <div
            onClick={() => props.completeTodo(props.todo.id)}
            className={props.todo.completed ? 'taskComplete' : 'taskNotComplete'}>
            <h2>{props.todo.value}</h2>
        </div>
    )
};


function mapStateToProps(state) {
    return { todos: state.todos }
};

export default connect(mapStateToProps, { completeTodo })(Todo);
