import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../components/LoginScreen';
import { UserContext } from '../../components/UserContext';

describe("Pruebas en loginScreen", ()=> {

    const user = {
        id: 1,
        name: "daniel"
    }

    const setUser = jest.fn()

    const wrapper = mount(
        <UserContext.Provider value = {{
            user,
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar la funcion para el click', ()=>{
        wrapper.find('.btn').prop('onClick')();
        
        expect( setUser ).toHaveBeenCalledWith({id: 2, name: "Daniel"})
    })
    
})