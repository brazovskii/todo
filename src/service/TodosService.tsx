import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITodo} from "../models/ITodo";

/*Изначально хотел сделать с RTK Query,
вариант рабочий,только визуально ничего не видно
*/
export const todosAPI = createApi({
    reducerPath: "todosAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    tagTypes: ["Todos"],
    endpoints: (build) => ({
        fetchTodos: build.query<ITodo[], string | number>({
            query: (url) => `${url}`,
            providesTags: (result) => ["Todos"],
        }),
        getTodos: build.query<ITodo[], number>({
            query: (currentPage = 1) => `/todos?_page=${currentPage}&_limit=10`,
            providesTags: (result) => ["Todos"],
        }),
        createTodo: build.mutation<ITodo, ITodo | string>({
            query: (todo) => ({
                url: `/todos`,
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["Todos"],
        }),
        updateTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `todos/${todo.id}`,
                method: "PUT",
                body: todo,
            }),
            invalidatesTags: ["Todos"],
        }),
        deleteTodo: build.mutation<ITodo[], number>({
            query: (id) => ({
                url: `todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todos"],
        })
    })
})