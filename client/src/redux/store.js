import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loaderSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
    reducer: {
        loaders: loadersReducer,
        users: usersReducer,
    },
});

export default store;

