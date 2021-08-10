import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe ('Prueba en hookapp', () => {
    test('Estructura del componente', () => {
        const wrapper = shallow(<HooksApp />);

        expect(wrapper).toMatchSnapshot();
    });
})