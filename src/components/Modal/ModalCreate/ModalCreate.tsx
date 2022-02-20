import React from 'react';
import './style.scss'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {createTodo, getNewTitle} from "../../../store/reducers/TodoSlice";

function ModalCreate() {
    const dispatch = useAppDispatch()
    const {title} = useAppSelector(state => state.todoList)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        if (title) {
            event.preventDefault();
            const id = +new Date();
            const completed = false
            dispatch(createTodo({title, id, completed}));
            dispatch(getNewTitle(''))
        } else {
            event.preventDefault();
            alert('Введите текст')
        }
    }

    return (
        <div className={'create'}>
            <form onSubmit={handleSubmit} className={'create__form'}>
                <input type="text" value={title} className={'create__title'}
                       onChange={(e) => dispatch(getNewTitle(e.target.value))} placeholder={'Description...'}/>
                <input type={'submit'} value={'Add todo'} className={'create__submit'}/>
            </form>
        </div>
    );
}

export default ModalCreate;