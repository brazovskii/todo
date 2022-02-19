import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ITodo} from "../../models/ITodo";


export const fetchTodos = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ITodo[]>(
                "https://jsonplaceholder.typicode.com/todos"
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить");
        }
    }
);