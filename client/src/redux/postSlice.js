import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts = [...state.posts, { ...action.payload }];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addPost } = postSlice.actions;

export default postSlice.reducer;
