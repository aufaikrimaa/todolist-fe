import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../redux/slice/todoSlice';
import edit from '../assets/img/edit.svg';
import remove from '../assets/img/delete.svg';

const DisplayTodo = () => {
    const [filter, setFilter] = useState('all');
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
            <div className="tab-menu flex items-center justify-center gap-20 mb-3">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <div className="flex items-center justify-center">
                <ul className='w-1/5'>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id} className='flex items-center justify-between w-full border-2 pl-4 pr-2 py-2 my-2'>
                            <div className="flex items-center space-x-4 w-full">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleTodo(todo.id)}
                                />
                                <span
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                    className='w-3/4'
                                >
                                    {todo.text}
                                </span>
                                <div className="flex items-center space-x-4 justify-end">
                                    <button
                                        onClick={() => {
                                            const newText = prompt('Enter new text:', todo.text);
                                            if (newText !== null) {
                                                handleEditTodo(todo.id, newText);
                                            }
                                        }}
                                    >
                                        <img src={edit} alt='edit' className='w-6' />
                                    </button>
                                    <button onClick={() => handleDeleteTodo(todo.id)}> <img src={remove} alt='delete' className='w-7' /></button>

                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default DisplayTodo;
