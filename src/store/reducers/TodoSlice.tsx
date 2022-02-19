import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../models/ITodo";

interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
    currentPage: number;
    perPage: number;
    totalCount: number;
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: "",
    currentPage: 1,
    perPage: 10,
    totalCount: 0

};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        getCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        deleteTodo(state, action: PayloadAction<ITodo[]>) {
            state.todos = action.payload
        }
    }
});

export const {deleteTodo, getCurrentPage} = todoSlice.actions

export default todoSlice.reducer;
