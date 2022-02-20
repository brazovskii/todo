import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getNewTitle, updateTodo} from "../../../store/reducers/TodoSlice";
import {ITodo} from "../../../models/ITodo";

interface IModalUpdate {
    todo: ITodo;
}

const ModalUpdate: FC<IModalUpdate> = ({todo}) => {
    const dispatch = useAppDispatch()
    const {title} = useAppSelector(state => state.todoList)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        if (title) {
            event.preventDefault();
            dispatch(updateTodo(todo.id));
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
                <input type={'submit'} value={'Refactor'} className={'create__submit'}/>
            </form>

        </div>
    );
}

export default ModalUpdate;