import { todoReducer } from "../../hooks/todoReducer"

describe("Pruebas en todoReducer", ()=>{

    const todos = [
        {
            id: 1,
            desc: "Estudiar",
            done: false
        },
        {
            id:2,
            desc: "Aprender",
            done: true
        }
    ]

    const newTodo = {
        id: 3,
        desc: "Ensayar",
        done: false
    }

    test('Mostrar data por defecto', () => {

        const state = todoReducer(todos, {});
        expect(state).toBe(todos);
    });

    test('Agregar todo', ()=>{

        const action = {
            type:"add",
            payload: newTodo
        }

        const state = todoReducer(todos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...todos, newTodo]);
    });

    test('Prueba de eliminar', () => {
        const action = {
          type: "delete",
          payload: {id: 2},
        };

        const state = todoReducer(todos, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([todos[0]]);
    });

    test('Debe cambiar a done', () => {
        const action = {
          type: "toggle",
          payload: {id: 2},
        };

        const state = todoReducer(todos, action);
        expect(state.filter(todo => todo.id === 2)[0].done).toBe(false);
    })
    
    
    
})