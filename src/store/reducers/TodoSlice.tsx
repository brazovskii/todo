import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../models/ITodo";
import {TodoState} from "../../models/TodoState";

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: "",
    currentPage: 1,
    perPage: 10,
    totalCount: 200,
    title: '',
    modalActive: false,
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        todosFulfilled(state, action: PayloadAction<ITodo[]>) {
            state.isLoading = false;
            state.error = "";
            state.todos = action.payload;
        },
        todosPending(state) {
            state.isLoading = true;
        },
        todosError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        getCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        createTodo(state, action: PayloadAction<ITodo>) {
            state.todos = [action.payload, ...state.todos]
        },
        deleteTodo(state, action: PayloadAction<ITodo[] | number>) {
            state.todos = state.todos.filter(el => el.id !== action.payload)
        },
        getNewTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },
        updateTodo(state, action: PayloadAction<ITodo[] | number>) {
            state.todos = state.todos.map(el =>
                (el.id === action.payload) ? {...el, title: state.title} : {...el}
            )
        },
    },
});

export const {
    todosFulfilled,
    todosPending,
    todosError,
    deleteTodo,
    getCurrentPage,
    createTodo,
    updateTodo,
    getNewTitle,
} = todoSlice.actions

export default todoSlice.reducer;
