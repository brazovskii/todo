import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {todosAPI} from "../service/TodosService";
import todoReducer from "./reducers/TodoSlice";

const rootReducer = combineReducers({
    todoList: todoReducer,
    [todosAPI.reducerPath]: todosAPI.reducer,
});


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(todosAPI.middleware)
    });
};


export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;