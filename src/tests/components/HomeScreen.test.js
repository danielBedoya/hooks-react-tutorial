import { mount } from 'enzyme';
import React from 'react';
import { UserContext } from "../../components/UserContext";
import { HomeScreen } from "../../components/HomeScreen";


describe("Pruebas en el componente HomeScreen", () => {
    const user = {
        name: "Daniel",
        email: "daniel@mail.com"
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})