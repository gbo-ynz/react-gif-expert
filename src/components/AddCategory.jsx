import { useState } from "react"

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return; //La línea de abajo, sólo se ejecutará si el lenght es > a 1
        
        // setCategories(  categories => [ inputValue, ...categories ] )
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value = { inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
