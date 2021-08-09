import React from 'react'

export const ListToDo = ({todos, dispatch}) => {

    const delTodo = (id) => {
      
      const action = {
        type: "delete",
        payload: {
          id: id
        }
      }

      dispatch(action);

    }

    const handleToggle = (id) => {
      const action = {
        type: "toggle",
        payload: {
          id: id,
        },
      };

      dispatch(action);
    };

    return (
        <ul style={{ display: "inline-block" }}>
            {todos.map((todo, i) => (
            <li key={todo.id}>
                <h5 
                    className={`card-title ${ todo.done && 'complete'}`}
                    style={{ display: "inline-block" }}
                    onClick={() => handleToggle(todo.id)}
                >
                    {i + 1}. {todo.desc}
                </h5>
                <div 
                    className="btn btn-outline-danger m-2" 
                    onClick={() => delTodo(todo.id)}
                >
                    Borrar
                </div>
            </li>
            ))}
        </ul>
    )
}
