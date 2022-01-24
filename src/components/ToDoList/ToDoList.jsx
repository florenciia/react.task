import React from 'react'

//components
import { ToDoItem } from '../ToDoItem/ToDoItem';

export function ToDoList ({todos, toggleToDo}) {
    return (
            <ul className='item'>
                {todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} toggleToDo={toggleToDo} />
                ))}
            </ul>
    );
};