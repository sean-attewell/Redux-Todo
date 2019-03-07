import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index'

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    changeValue = event => {
        this.setState({
            value: event.target.value
        });
    };

    addTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.value)
        this.setState({ value: '' })

    };

    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.changeValue}
                />
                <button type='submit'>Add Todo</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo: addTodo })(TodoInput);