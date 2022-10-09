import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register, login } from '../api';

const loginAsync = createAsyncThunk('account/login', async ({ email, password }) => {
    try {
        const { data } = await login({ email, password });
        return data;
    } catch (err) {
        console.log(err);
    }
});

const registerAsync = createAsyncThunk('account/register', async ({ name, email, password }) => {
    try {
        const { data } = await register({ name, email, password });
        return data;
    } catch (err) {
        console.log(err);
    }
});

const initialState = {
    user: {},
    login: {
        hasLogin: false,
    },
    status: 'idle',
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.user = action.payload;
        },
        signOut: (state) => {
            state.user = {};
            state.login.hasLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.login.hasLogin = true;
                state.user = { ...action.payload.data.user };
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'error';
                state.login.hasLogin = false;
            })
            .addCase(registerAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.login.hasLogin = true;
                state.user = { ...action.payload.data.user };
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.status = 'error';
                state.login.hasLogin = false;
            });
    },
});

export { loginAsync, registerAsync };

export const { setUserInfo, signOut } = accountSlice.actions;

export default accountSlice.reducer;
