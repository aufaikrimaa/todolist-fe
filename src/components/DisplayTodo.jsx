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
    const [editingTodo, setEditingTodo] = useState(null);
    const [newText, setNewText] = useState('');

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

    const handleEditClick = (todo) => {
        setEditingTodo(todo.id);
        setNewText(todo.text);
    };

    const handleSaveClick = () => {
        if (newText.trim() !== '') {
            handleEditTodo(editingTodo, newText);
            setEditingTodo(null);
            setNewText('');
        }
    };


    return (
        <div className="display-todo">
            <div className="tab-menu flex items-center justify-center gap-20 md:gap-10 mb-3">
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
                <ul>
                    {filteredTodos.length > 0 ? (
                        <TransitionGroup>
                            {filteredTodos.map((todo) => (
                                <CSSTransition key={todo.id} timeout={500} classNames="fadeIn">
                                    <li key={todo.id} className='flex items-center justify-between  border-2 pl-4 pr-2 py-2 my-2'>
                                        <div className="flex items-center space-x-4">
                                            <input
                                                type="checkbox"
                                                checked={todo.completed}
                                                onChange={() => handleToggleTodo(todo.id)}
                                                className='h-3 w-3 accent-teal-600'
                                            />
                                            {editingTodo === todo.id ? (
                                                <div className="flex">
                                                    <input
                                                        type="text"
                                                        value={newText}
                                                        onChange={(e) => setNewText(e.target.value)}
                                                        className="border-b-2 border-teal-500 outline-none bg-transparent w-45 lg:w-43 md:w-30"
                                                    />
                                                    <button onClick={handleSaveClick} className="rounded-lg mx-1 px-2 py-1 ml-6 border-2 border-teal-600 transition-transform duration-300 hover:scale-110 text-teal-500 font-bold text-xs">oke</button>
                                                </div>

                                            ) : (
                                                <span
                                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                                    className='w-45 lg:w-43 md:w-30'
                                                >
                                                    {todo.text}
                                                </span>
                                            )}
                                            {editingTodo !== todo.id && (
                                                <div className="flex items-center space-x-4 justify-end">
                                                    <button
                                                        onClick={() => handleEditClick(todo)}
                                                        className="transform hover:scale-125 transition-transform duration-300"
                                                    >
                                                        <img src={edit} alt="edit" className="w-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteTodo(todo.id)}
                                                        className="transform hover:scale-125 transition-transform duration-300"
                                                    >
                                                        <img src={remove} alt="delete" className="w-5" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    ) : (
                        <p className="text-gray-600 text-center italic text-xs mt-10">
                            {filter === 'all' ? 'The todo list is empty, Please add some todos!' :
                                filter === 'active' ? "You don't have any activities to do yet" :
                                    filter === 'completed' ? "You haven't completed any of your activities yet" : ''
                            }
                        </p>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default DisplayTodo;
