import React, {FC, useState} from "react";
import {ITodo} from "../../models/ITodo";
import './style.scss'
import {deleteTodo} from "../../store/reducers/TodoSlice";
import {useAppDispatch} from "../../hooks/redux";
import Modal from "../Modal/Modal";
import ModalUpdate from "../Modal/ModalUpdate/ModalUpdate";

interface TodoItemProps {
    todo: ITodo;
}

const TodoList: FC<TodoItemProps> = ({todo}) => {
    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <div className={'todo'}>
                <span className={'todo__title'}>{todo.title}</span>
                <span>
                    <button onClick={() => setModalActive(true)} className={'todo__delete'}>✏️</button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))} className={'todo__delete'}>✖️</button>
                </span>
            </div>
            <Modal active={modalActive} setActive={setModalActive}><ModalUpdate todo={todo}/></Modal>
        </>
    );
}

export default TodoList;