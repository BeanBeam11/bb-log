import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice';
import postReducer from './postSlice';

export const store = configureStore({
    reducer: {
        account: accountReducer,
        post: postReducer,
    },
});
