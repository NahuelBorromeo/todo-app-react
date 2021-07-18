import React from 'react'
import { useForm } from '../hooks/useForm';


const time = Date.now();
const now = new Date(time);
now.toDateString();


export const TodoAdd = ({ handleAddTodo }) => {

    const  [ { description }, handleInputChange , reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( description.trim().length <= 1){
            return;
        } else {
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                date: now.toDateString(),
                done: false
            }
            
            handleAddTodo( newTodo );
            reset();
        }
    }

    return (
        <>
         <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Enter the task..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />
                
                <button
                    type="submit"
                    className="btn btn-primary btn-lg mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>   
        </>
    )
}
