import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [state, setstate] = useState(initialState);

    const reset = () => {
        setstate( initialState );
    }

    const onHandleChange = ({ target }) => {
        setstate({
            ...state,
            [ target.name ]: target.value
        });
    };

    return [state, onHandleChange, reset];
}
