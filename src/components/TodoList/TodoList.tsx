import React, {FC} from "react";
import {ITodo} from "../../models/ITodo";
import './style.scss'

interface TodoItemProps {
    todo: ITodo;
    remove: (todo: ITodo) => void;
    update: (todo: ITodo) => void;
}

const TodoList: FC<TodoItemProps> = ({todo, remove, update}) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(todo);
    };

    const handleUpdate = () => {
        const title = prompt() || "";
        update({...todo, title});
    };

    return (
        <div className={'todo'}>
            <span onClick={handleUpdate} className={'todo__title'}>{todo.title}</span>

            <span><button onClick={handleRemove} className={'todo__delete'}>✖</button></span>
        </div>
    );
}

export default TodoList;