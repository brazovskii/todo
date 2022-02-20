import {ITodo} from "./ITodo";

export interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
    currentPage: number;
    perPage: number;
    totalCount: number;
    title: string;
    modalActive: boolean;
    completed: boolean
}