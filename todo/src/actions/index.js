export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text) => {
    let newTodo = {
        id: Date.now(),
        value: text,
        completed: false
    };
    return {id: Date.now(), type: ADD_TODO, payloadTodo: newTodo};
};

export const completeTodo = (id) => {
    return {type: COMPLETE_TODO, id};
};

export const deleteTodo = () => {
    return {type: DELETE_TODO};
};