import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Pruebas en useCounter', () => {
    test('Prueba de valores por defecto', () => {

        const { result } = renderHook( ()=>useCounter() );

        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(0);
        expect( typeof decrement ).toBe("function");
        expect( typeof increment ).toBe("function");
        expect( typeof reset ).toBe("function");

    });

    test('Prueba de valor 100 en el counter', () =>{
        const { result } = renderHook(() => useCounter(100));

        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Prueba de funcion incremento', () => {
        const { result } = renderHook(() => useCounter(100));

        const {increment} = result.current;
        act( () =>{
            increment();
        });
        const { counter } = result.current;
        expect( counter ).toBe(101);
    });

    test('Prueba de funcion decrement', () => {
        const { result } = renderHook(() => useCounter(100));

        const {decrement} = result.current;
        act( () =>{
            decrement();
        });
        const { counter } = result.current;
        expect( counter ).toBe(99);
    });

    test('Prueba de funcion reset', () => {
        const { result } = renderHook(() => useCounter(100));

        const {decrement, reset} = result.current;
        act( () =>{
            decrement();
            reset();
        });
        const { counter } = result.current;
        expect( counter ).toBe(100);
    });

});