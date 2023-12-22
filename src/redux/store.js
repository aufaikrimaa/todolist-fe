import { configureStore } from '@reduxjs/toolkit';
import todos from './slice/todoSlice';

const store = configureStore({
    reducer: {
        todos,
    },
});

export default store;
