import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/index';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return (
        <div>
            <div>
                {props.todos.map((todo) => (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </div>

            <button onClick={() => props.deleteTodo()}>Delete Todo</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { deleteTodo })(TodoList);