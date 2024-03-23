import {configureStore} from "@reduxjs/toolkit";
import {loadingReducer} from "./slices";
import {authReducer} from "./slices/authSlice";

const store = configureStore({
    reducer: {
        loadingReducer,
        auth:authReducer
    }
});

export {
    store
}