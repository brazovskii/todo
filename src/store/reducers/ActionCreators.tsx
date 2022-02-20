import axios from "axios";
import {ITodo} from "../../models/ITodo";
import {AppDispatch} from "../store";
import {todosError, todosFulfilled, todosPending} from "./TodoSlice";


export const fetchTodos = (currentPage: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosPending());
        const response = await axios.get<ITodo[]>(
            `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10`
        );
        dispatch(todosFulfilled(response.data));
    } catch (e: any) {
        dispatch(todosError(e.message));
    }
};