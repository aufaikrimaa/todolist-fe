import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';

const InputTodo = ({ inputValue }) => {
    const [text, setText] = useState(inputValue || '');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodo({ text }));
            setText('');
        }
    };

    return (
        <div className="input-todo flex items-center justify-center mb-8 ">
            <input
                type="text" value={text} onChange={(e) => setText(e.target.value)}
                className='border-2 rounded-lg w-2/5 md:w-3/5 py-2 px-4 mx-2 bg-transparent'
                placeholder='What to do' />
            <button
                onClick={handleAddTodo}
                className="rounded-lg mx-2 px-4 py-3 bg-teal-600 transition-transform duration-300 hover:scale-110 text-white font-bold">
                add
            </button>
        </div>
    );
};

InputTodo.propTypes = {
    inputValue: PropTypes.string,
};

export default InputTodo;
