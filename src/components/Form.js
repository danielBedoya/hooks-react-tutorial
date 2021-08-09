import React from 'react';
import { useForm } from "../hooks/useForm";

import './counter.css';

export const Form = () => {

    const [values, onHandleChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = values;

    return (
        <>
        <h1>Formulario Use Effect</h1>
        <form className="p-2">
            <input type="text" name='name' placeholder="Nombre" value={name} onChange={onHandleChange}></input>
            <hr />
            <input type="email" name='email' placeholder="Email" value={email} onChange={onHandleChange}></input>
            <hr />
            <input type="password" name='password' placeholder="Contraseña" value={password} onChange={onHandleChange}></input>
            <hr />
            <button type="submit" className="btn btn-outline-success" > Enviar </button>
        </form>
        </>
    );
}
