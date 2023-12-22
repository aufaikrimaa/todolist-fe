import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../redux/slice/todoSlice';
import edit from '../assets/img/edit.svg';
import remove from '../assets/img/delete.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
                <button
                    onClick={() => setFilter('all')}
                    className={`relative transition-colors duration-300 ${filter === 'all' ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`}
                >
                    All
                    <div className={`absolute w-full h-1 bg-teal-500 bottom-0 left-0 transition-transform duration-300 ${filter === 'all' ? 'scale-x-100 rounded-md' : 'scale-x-0 hover:scale-x-100 rounded-md'}`}></div>
                </button>
                <button
                    onClick={() => setFilter('active')}
                    className={`relative transition-colors duration-300 ${filter === 'active' ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`}
                >
                    Active
                    <div className={`absolute w-full h-1 bg-teal-500 bottom-0 left-0 transition-transform duration-300 ${filter === 'active' ? 'scale-x-100 rounded-md' : 'scale-x-0 hover:scale-x-100 rounded-md'}`}></div>
                </button>
                <button
                    onClick={() => setFilter('completed')}
                    className={`relative transition-colors duration-300 ${filter === 'completed' ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`}
                >
                    Completed
                    <div className={`absolute w-full h-1 bg-teal-500 bottom-0 left-0 transition-transform duration-300 ${filter === 'completed' ? 'scale-x-100 rounded-md' : 'scale-x-0 hover:scale-x-100 rounded-md'}`}></div>
                </button>
            </div>
            <div className="flex items-center justify-center">
                <ul className='w-1/5'>
                    <TransitionGroup>
                        {filteredTodos.map((todo) => (
                            <CSSTransition key={todo.id} timeout={500} classNames="fadeIn">
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
                                                className="transform hover:scale-125 transition-transform duration-300"
                                            >
                                                <img src={edit} alt="edit" className="w-6" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteTodo(todo.id)}
                                                className="transform hover:scale-125 transition-transform duration-300"
                                            >
                                                <img src={remove} alt="delete" className="w-7" />
                                            </button>
                                        </div>

                                    </div>
                                </li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ul>
            </div>

        </div>
    );
};

export default DisplayTodo;
