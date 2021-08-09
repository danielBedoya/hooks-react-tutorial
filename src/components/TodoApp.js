import React, {useEffect, useReducer} from 'react'
import { todoReducer } from "../hooks/todoReducer";
import { ListToDo } from "./ListToDo";
import './counter.css';
import { FormToDo } from './FormToDo';

const init = () =>{
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect( ()=> {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    return (
      <div className="container mt-2">
        <h1> Todo App ({todos.length})</h1>
        <hr />
        <div className="row">
            <div className="col-6">
                <ListToDo
                  todos={todos}
                  dispatch={dispatch}
                ></ListToDo>
            </div>
            <div className="col-6">
                <FormToDo
                  dispatch= {dispatch}
                ></FormToDo>
            </div>
        </div>
      </div>
    );
}
