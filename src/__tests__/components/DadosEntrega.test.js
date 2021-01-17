import React from 'react';
import ReactDOM from 'react-dom';
import DadosEntrega from '../../components/FormularioCadastro/DadosEntrega';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< DadosEntrega/>, div);
  });
