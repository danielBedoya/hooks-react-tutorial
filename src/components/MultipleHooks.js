import React from 'react'
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleHooks = () => {

    let { counter, increment } = useCounter(1);
    let { loading, data, error } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    let { author, quote} = !!data && data[0];

    return (
        <div className="col-4 mx-auto" >
            <h1 style={{"fontFamily": "Arial", "fontSize": "40px"}}> Frases de BreakingBad </h1>
            <hr />
            { 
                loading
                ?
                (
                    <div className="alert alert-info text-center">
                        Cargando...
                    </div>
                )
                :
                (
                    <>
                    <blockquote className="blockquote text-right">
                        <p>
                            { quote }
                        </p>
                        <footer className="blockquote-footer" >
                            { author }
                        </footer>
                    </blockquote>

                    <button 
                        className="btn btn-outline-info"
                        onClick= {() => increment()}
                        >
                        Siguiente
                    </button>

                    </>
                )
            
            }


        </div>
    )
}
