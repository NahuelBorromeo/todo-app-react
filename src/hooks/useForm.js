import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    //Nuestro useForm recibe un objeto, cada propiedad del objeto va a ser un campo de texto o un selector, etc
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    //El handleinputchange nos sirve para leerlo rápidamente
    
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }



    return [ values, handleInputChange, reset ];
    
}
