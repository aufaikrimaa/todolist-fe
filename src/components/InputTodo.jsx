// src/components/InputTodo.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';

const InputTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodo({ text }));
            setText('');
        }
    };

    return (
        <div className="input-todo">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default InputTodo;
