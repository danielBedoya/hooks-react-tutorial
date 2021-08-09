import { useState } from "react"


export const useCounter = (initialValue = 0) => {
    const [counter, setstate] = useState(initialValue);
    
    const increment = (factor = 1) => {
        setstate( counter + factor );
    };

    const decrement = (factor = 1) => {
        setstate( counter - factor );
    };

    const reset = () => {
        setstate( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
