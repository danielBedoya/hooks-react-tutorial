import React from 'react'
import { useForm } from "../hooks/useForm";

export const FormToDo = ({dispatch}) => {

    const [{ description }, onHandleChange, reset] = useForm({
      description: "",
    });

    const addTodo = (e) => {
      e.preventDefault();

      if (description.trim().length <= 1) {
        return;
      }

      const action = {
        type: "add",
        payload: {
          id: new Date().getTime(),
          desc: description,
          done: false,
        },
      };

      dispatch(action);
      reset();
    };

    return (
        <div>
            <h5>Agregar tarea</h5>
            <form className="d-grid gap-2" onSubmit={ addTodo }>
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onHandleChange }
                    >
                </input>
                <button className="btn btn-outline-primary mt-2" >Agregar</button>
            </form>
        </div>
    )
}
