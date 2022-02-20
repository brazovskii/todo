import React, {useEffect, useState} from "react";
import TodoList from "../TodoList/TodoList";
import {NavLink} from "react-router-dom";
import './style.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getCurrentPage} from "../../store/reducers/TodoSlice";
import {createPages} from "../../utils/pagesCreator";
import {fetchTodos} from "../../store/reducers/ActionCreators";
import Modal from "../Modal/Modal";
import ModalCreate from "../Modal/ModalCreate/ModalCreate";


function TodosList() {
    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState(false)
    const {todos, currentPage, totalCount} = useAppSelector(state => state.todoList)
    const pageCount = Math.ceil(totalCount / 10)
    const pages: number[] = []
    createPages(pages, pageCount, currentPage)

    useEffect(() => {
        dispatch(fetchTodos(currentPage))
    }, [currentPage])

    return (
        <div className="todos">
            <div className={'todos__header'}>
                <NavLink to={'/'} className={'todos__btn'}>Home</NavLink>
                <button onClick={() => setModalActive(true)} className={'todos__btn'}>{'Create todo'}</button>
            </div>

            {todos && todos.map(todo => {
                return (
                    <TodoList
                        key={todo.id}
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
            <Modal active={modalActive} setActive={setModalActive}><ModalCreate/></Modal>
        </div>
    );
}

export default TodosList;