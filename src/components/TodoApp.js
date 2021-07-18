import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer'

import './styles.css'

//La funcion init se llama en el useReducer y lo que sea que retorne es lo que va a ser el initialState
const init = () => {
    //Si esta linea regresa null, retornará un arreglo vacío.
    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Learn React',
    //     date: now.toDateString(),
    //     done: false
    // }];
}

export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, [] , init )
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {
        
        dispatch({
            type:'toggle',
            payload: todoId
        })

    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr/>

            <div className="row">
                <div className="col-7">

                    <TodoList 
                        todos = { todos } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle }
                    />

                </div>
                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>
            </div>
        </div>
    )
}
