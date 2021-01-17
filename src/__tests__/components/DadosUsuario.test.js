import React from 'react';
import ReactDOM from 'react-dom';
import DadosUsuario from '../../components/FormularioCadastro/DadosUsuario';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< DadosUsuario/>, div);
  });
