import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.todos.length + 1,
                text: action.payload.text,
                completed: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        toggleTodo: (state, action) => {
            const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
        editTodo: (state, action) => {
            const editedTodo = state.todos.find((todo) => todo.id === action.payload.id);
            if (editedTodo) {
                editedTodo.text = action.payload.newText;
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
