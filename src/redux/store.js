import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/users.slice';

export const store = configureStore({
    reducer : {
        users : userReducer,
    }
})