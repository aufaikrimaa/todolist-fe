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
        <div className="input-todo flex items-center justify-center mb-8 ">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='border-2 rounded-lg w-2/5 py-2 px-4 mx-2' placeholder='what do you wanna do today?' />
            <button onClick={handleAddTodo} className='rounded-lg mx-2 px-4 py-3 bg-cyan-200'> add </button>
        </div>
    );
};

export default InputTodo;
