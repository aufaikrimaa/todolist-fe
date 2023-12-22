// src/components/DisplayTodo.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../redux/slice/todoSlice';

const DisplayTodo = () => {
    const [filter, setFilter] = useState('all');
    // Mengakses state.todos.todos daripada state.todos
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const filteredTodos = (() => {
        switch (filter) {
            case 'active':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    })();

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo({ id }));
    };

    const handleEditTodo = (id, newText) => {
        dispatch(editTodo({ id, newText }));
    };

    return (
        <div className="display-todo">
            <h2>Todo List</h2>
            <div className="tab-menu">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        <button
                            onClick={() => {
                                const newText = prompt('Enter new text:', todo.text);
                                if (newText !== null) {
                                    handleEditTodo(todo.id, newText);
                                }
                            }}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayTodo;
