import React from 'react'

export function ToDoItem({todo, toggleToDo}) {
    const {id, task, completed} = todo;

    const handlerToDoClick = () => {
        toggleToDo(id);
    };

    return (
        <div>
         {/* <li> */}
            <input type='checkbox' checked={completed} onChange={handlerToDoClick} />
            {task}
        {/* </li> */}
        </div>
        );
};
