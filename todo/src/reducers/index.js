import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/index';


const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newTodos = [...state.todos, action.payloadTodo]
            return { todos: newTodos };

        case COMPLETE_TODO:
            let toggleTodos = state.todos.map(todo =>
                todo.id === action.id 
                    ? { ...todo, completed: !todo.completed } 
                    : todo
                    )
            return { todos: toggleTodos }

        case DELETE_TODO:
            let deleteTodos = state.todos.filter(todo => todo.completed !== true)
            return { todos: deleteTodos }
        default:
            return state;
    }
}

export default reducer;