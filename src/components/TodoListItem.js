import React from 'react';

import './styles.css'

export const TodoListItem = ( { todo, i , handleDelete, handleToggle } ) => {


    return (
        <li
            key={ todo.id }
            className="list-group-item"
        >
            <p 
                className={ `${ todo.done && 'complete'}` }
                onClick={ () => handleToggle( todo.id ) }
            >{ i + 1 }. { todo.desc } - { todo.date }</p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete(todo.id) }

            >
                Borrar
            </button>
        </li>
    )
}
