import React from 'react'
import { useCounter } from "../hooks/useCounter";
import "./counter.css";

export const CounterApp = () => {

    const {state, increment, decrement, reset} = useCounter(20);

    return (
        <>
            <h1>Counter1 { state }</h1>

            <button
                className="btn btn-outline-primary" 
                onClick= { () => increment() }
                > +1 </button>
            
            <button
                className="m-2 btn btn-outline-primary" 
                onClick= { () => decrement() }
                > -1 </button>
            
            <button
                className="m-2 btn btn-outline-primary" 
                onClick= { reset }
                > Reset </button>

        </>
    )
}
