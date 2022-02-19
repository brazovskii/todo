import React, {useEffect} from "react";
import {todosAPI} from "../../service/TodosService";
import TodoList from "../TodoList/TodoList";
import {ITodo} from "../../models/ITodo";
import {NavLink} from "react-router-dom";
import './style.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getCurrentPage} from "../../store/reducers/TodoSlice";
import {createPages} from "../../utils/pagesCreator";


function TodosList() {
    const dispatch = useAppDispatch()
    const {currentPage} = useAppSelector(state => state.todoList)
    const {data} = todosAPI.useFetchTodosQuery('todos')
    const {data: todos} = todosAPI.useGetTodosQuery(currentPage)
    const [deleteTodo, {}] = todosAPI.useDeleteTodoMutation()
    const [createTodo, {}] = todosAPI.useCreateTodoMutation()
    const [updateTodo, {}] = todosAPI.useUpdateTodoMutation()
    // console.log(data.length)
    const pageCount = Math.ceil(10 * 10)
    const pages: number[] = []
    createPages(pages, pageCount, currentPage)

    const handleCreate = async () => {
        const completed = false
        const title = prompt();
        await createTodo({title, completed} as ITodo);
    };

    const handleRemove = (todo: ITodo) => {
        deleteTodo(todo.id);
    };
    const handleUpdate = (todo: ITodo) => {
        updateTodo(todo);
    };
    return (
        <div className="todos">
            <div className={'todos__header'}>
                <NavLink to={'/'} className={'todos__btn'}>Home</NavLink>
                <button onClick={handleCreate} className={'todos__btn'}>Create todo</button>
            </div>

            {todos && todos.map(todo => {
                return (
                    <TodoList
                        key={todo.id}
                        remove={handleRemove}
                        update={handleUpdate}
                        todo={todo}
                    />
                )
            })}
            <div className={'pages'}>{
                pages.map((page, index) =>
                    <span key={index} className={currentPage === page ? 'current-page' : 'page'}
                          onClick={() => dispatch(getCurrentPage(page))}>{page}</span>
                )
            }</div>
        </div>
    );
}

export default TodosList;