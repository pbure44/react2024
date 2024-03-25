import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IAuth, IUser} from "../../interfaces";
import {authService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    registerError: string
    loginError: string
    currentUser: IUser
}

const initialState: IState = {
    registerError: null,
    loginError: null,
    currentUser: null
}

const register = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const login = createAsyncThunk<IUser, { user: IAuth }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user); //returning of the user
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const me = createAsyncThunk<IUser,void>(
    "authSlice/me",
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await authService.me();
            return data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action)=>{
                state.currentUser = action.payload
            })
            .addCase(register.rejected, state => {
                state.registerError = 'Username already exists'
            })
            .addCase(login.rejected, state => {
                state.loginError = 'Wrong username or password'
            })
            .addCase(me.fulfilled, (state,action)=>{
                state.currentUser = action.payload
            })
            .addMatcher(isFulfilled(register, login), state => {
                state.registerError = null
                state.loginError = null
            })
    }
});

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    register,
    login,
    me
}

export {
    authReducer, authActions
}