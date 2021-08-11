import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en el hook useForm", () => {

    const initialForm = {
        name: "Daniel",
        email: "daniel@mail.com"
    }

    test("Prueba del formulario por defecto", () => {
        const { result } = renderHook( ()=> useForm(initialForm));

        const [state, onHandleChange, reset] = result.current;
        
        expect(state).toEqual(initialForm);
        expect(typeof onHandleChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test("Prueba del cambio en el valor inicial", () => {
        const {result} = renderHook( ()=> useForm(initialForm) );

        const [ , onHandleChange] = result.current;

        act(()=>{
            onHandleChange({
                target:{
                    name: "name",
                    value: "Camilo"
                }
            });
        })

        const state = result.current[0];

        expect(state.name).toEqual("Camilo");
    });

    test("Prueba en el reset", ()=>{
        const {result} = renderHook( ()=> useForm(initialForm) );

        const [ , onHandleChange, reset] = result.current;

        act(()=>{
            onHandleChange({
                target:{
                    name: "name",
                    value: "Camilo"
                }
            });

            reset();
        })

        const state = result.current[0];

        expect(state).toEqual(initialForm);
    })

})